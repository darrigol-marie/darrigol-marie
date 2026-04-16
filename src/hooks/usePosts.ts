import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { ExperiencePost, type ExperienceData } from '../types/experience.type';

type UsePostsOptions = {
    queryKey: string[],
    url: string,
    dataMapper: (item: ExperienceData) => ExperiencePost,
};

export const usePosts = ({
    queryKey,
    url,
    dataMapper
}: UsePostsOptions) => {
    return useQuery<ExperiencePost[]>({
        queryKey,
        queryFn: () =>
            axios
                .get(url)
                .then((response) =>
                    response.data.map(dataMapper),
                ),
    });
};