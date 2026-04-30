import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import type { Post, PostData } from '../types/post.type';

type UsePostsOptions<T extends PostData, U extends Post> = {
    queryKey: string[],
    url: string,
    dataMapper: (item: T) => U,
};

export const usePosts = <T extends PostData, U extends Post>({
    queryKey,
    url,
    dataMapper
}: UsePostsOptions<T, U>) => {
    return useQuery<U[]>({
        queryKey,
        queryFn: () =>
            axios
                .get(url)
                .then((response) =>
                    response.data.map(dataMapper),
                ),
    });
};