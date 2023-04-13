import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRotesProps } from '@/shared/types/router';
import { AppRoutes } from '@/shared/const/router';
import { routeConfig } from '@/app/providers/router/config/routeConfig';
import { PageLoader } from '@/widgets/PageLoader';
import { RequireAuth } from './RequireAuth';

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRotesProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>
        {route.element}
      </Suspense>
    );
    return (
      <Route
        key={route.path}
        path={route.path}
        element={route.authOnly
          ? <RequireAuth roles={route.roles}>{element}</RequireAuth>
          : element}
      />
    );
  }, []);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig).map((renderWithWrapper))}
      </Routes>
    </Suspense>
  );
};

export default memo(AppRouter);
