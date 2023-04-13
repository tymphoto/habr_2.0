export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'aricles',
  ARICLE_DETAILS = 'article_details',
  ARICLE_CREATE = 'article_create',
  ARICLE_EDIT = 'article_edit',
  ADMIN_PANEL = 'admin_panel',
  FORBIDDEN = 'forbidden',
  // last
  NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile/',
  [AppRoutes.ARTICLES]: '/articles',
  [AppRoutes.ARICLE_DETAILS]: '/articles/',
  [AppRoutes.ARICLE_CREATE]: '/articles/new',
  [AppRoutes.ARICLE_EDIT]: '/articles/:id/edit',
  [AppRoutes.ADMIN_PANEL]: '/admin',
  [AppRoutes.FORBIDDEN]: '/forbidden',
  [AppRoutes.NOT_FOUND]: '*',
};
