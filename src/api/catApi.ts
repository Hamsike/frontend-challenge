import type { CatImage } from "@/types";
import axios from "axios";

const catApi = axios.create({
  baseURL: 'https://api.thecatapi.com/v1/',
  headers: {
    'x-api-key': 'live_e5n5wLftxZYvvq1aFBNnDJ9pD8dMamCf97n4JWzdYj4hAZyfLn6RTvclwRPaXLPY'
  }
})

export const catApiService = {
  getCats: async (page: number = 0, limit: number = 15): Promise<CatImage[]> => {
    const response = await catApi.get('/images/search', {
      params: {
        page,
        limit,
        size: 'med',
        order: 'ASC'
      }
    });
    return response.data;
  },
}