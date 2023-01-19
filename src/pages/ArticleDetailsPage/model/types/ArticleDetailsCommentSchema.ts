import { EntityState } from '@reduxjs/toolkit';
import { IComment } from 'entities/Comment';

export interface ArticleDetailsCommentSchema extends EntityState<IComment> {
  isLoading: boolean;
  error?: string;
}
