import { ArticleDetailsCommentSchema } from './ArticleDetailsCommentSchema';
import { ArticleDetailsRecommendationsSchema } from './ArticleDetailsRecommendationsSchema';

export interface ArticleDetailsPageSchema {
  commments: ArticleDetailsCommentSchema;
  recommendations: ArticleDetailsRecommendationsSchema
}
