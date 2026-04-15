import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import type { Post } from '../types/post.type';
import { ExperiencePost, type ExperienceData } from '../types/experience.type';

export const usePosts = () => {
    return useQuery<Post[]>({
        queryKey: ['experience'],
        queryFn: () =>
            axios
                .get('/experiences.json')
                .then((response) =>
                    response.data.map(
                        (experience: ExperienceData) => new ExperiencePost(experience),
                    ),
                ),
    });
};