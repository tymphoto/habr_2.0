import { lazy } from 'react';

export const ArticleEditPageAsync = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  // Для имитации задержки при запросе к api
  setTimeout(() => resolve(import('./ArticleEditPage')), 400);
}));
