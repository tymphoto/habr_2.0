import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { SortOrder } from '@/shared/types/sort';
import { getArticlesPageIsInited } from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlePage = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
  >(
    'articlesPage/initArticlePage',
    async (serchParams, thunkApi) => {
      const { getState, dispatch } = thunkApi;
      const inited = getArticlesPageIsInited(getState());

      if (!inited) {
        const orderFromUrl = serchParams.get('order') as SortOrder;
        const sortFromUrl = serchParams.get('sort') as ArticleSortField;
        const searchFromUrl = serchParams.get('search');
        const typeFromUrl = serchParams.get('type') as ArticleType;

        if (orderFromUrl) {
          dispatch(articlesPageActions.setOrder(orderFromUrl));
        }

        if (sortFromUrl) {
          dispatch(articlesPageActions.setSort(sortFromUrl));
        }

        if (searchFromUrl) {
          dispatch(articlesPageActions.setSearch(searchFromUrl));
        }

        if (typeFromUrl) {
          dispatch(articlesPageActions.setType(typeFromUrl));
        }

        dispatch(articlesPageActions.initState());
        dispatch(fetchArticlesList({}));
      }
    },
  );
