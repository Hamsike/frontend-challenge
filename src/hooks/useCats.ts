import { catApiService } from "@/api/catApi";
import type { CatImage } from "@/types";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useInfiniteCats = (limit: number = 15) => {
  return useInfiniteQuery({
    queryKey: ['cats', limit],
    queryFn: ({ pageParam = 0 }) => catApiService.getCats(pageParam, limit),
    getNextPageParam: (lastPage: CatImage[], allPages: CatImage[][]) => {
      if (lastPage.length < limit) return undefined;
      return allPages.length;
    },
    initialPageParam: 0,
    staleTime: 5 * 60 * 1000,
  });
};
