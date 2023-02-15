import { rtkApi } from 'shared/api/rtkApi';

const recommendationApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecommendations: build.query({
      query: (limit) => ({
        url: '/articles',
        params: {
          _limit: limit,
        },
        overrideExisting: false,
      }),
    }),
  }),
});

export const useArticleRecommendationsList = recommendationApi.useGetArticleRecommendationsQuery;
