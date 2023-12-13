export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'aricles',
  ARICLE_DETAILS = 'article_details',
  ARICLE_CREATE = 'article_create',
  ARICLE_EDIT = 'article_edit',
  ADMIN_PANEL = 'admin_panel',
  SETTINGS = 'settings',
  FORBIDDEN = 'forbidden',
  // last
  NOT_FOUND = 'not_found'
}

export const getRouteMain = () => '/';
export const getRouteSettings = () => '/settings';
export const getRouteAbout = () => '/about';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteArticles = () => '/articles';
export const getRouteArticleDetails = (id: string) => `/articles/${id}`;
export const getRouteArticleCreate = () => '/articles/new';
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`;
export const getRouteAdmin = () => '/admin';
export const getRouteForbidden = () => '/forbidden';
