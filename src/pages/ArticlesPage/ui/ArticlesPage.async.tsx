import { lazy } from 'react';

export const ArticlesPageAsync = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  // Для имитации задержки при запросе к api
  setTimeout(() => resolve(import('./ArticlesPage')), 400);
}));
