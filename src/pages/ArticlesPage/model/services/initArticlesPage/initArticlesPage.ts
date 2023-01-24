import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlesPageIsInited } from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlePage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
  >(
    'articlesPage/initArticlePage',
    async (_, thunkApi) => {
      const { getState, dispatch } = thunkApi;
      const inited = getArticlesPageIsInited(getState());

      if (!inited) {
        dispatch(articlesPageActions.initState());
        dispatch(fetchArticlesList({
          page: 1,
        }));
      }
    },
  );
