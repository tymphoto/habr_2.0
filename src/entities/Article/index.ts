export {
  ArticleDetails,
} from './ui/ArticleDetails/ArticleDetails';

export type { Article } from './model/types/article';

export {
  ArticleView,
  ArticleSortField,
  ArticleType,
  ArticleBlockType,
} from './model/consts/consts';
export type { ArticleDetailsSchema } from './model/types/articleDetailsSchema';
export {
  getArticleDetailsData,
  getArticleDetailsIsLoading,
  getArticleDetailsError,
} from './model/selectors/articleDetails';

export { ArticleList } from './ui/ArticleList/ArticleList';
export { articleDetailsReducer } from './model/slice/articleDetailsSlice';
