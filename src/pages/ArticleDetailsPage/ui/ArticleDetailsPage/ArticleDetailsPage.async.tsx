import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  // Для имитации задержки при запросе к api
  setTimeout(() => resolve(import('./ArticleDetailsPage')), 1500);
}));
