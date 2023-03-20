import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { ArticleList } from 'entities/Article';
import { Loader } from 'shared/ui/Loader/Loader';
import { VStack } from 'shared/ui/Stack';
import { useArticleRecommendationsList } from '../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const { data: articles, isLoading, error } = useArticleRecommendationsList(4);

  if (error || !articles) {
    return (
      <Text
        title={t('Ошибка')}
        size={TextSize.L}
      />
    );
  }
  return (
    <VStack gap="16" className={classNames('', {}, [className])}>
      <Text
        title={t('Рекомендуем')}
        size={TextSize.L}
      />
      <ArticleList
        articles={articles}
        target="_blank"
        isLoading={isLoading}
        virtualized={false}
      />
    </VStack>
  );
});
