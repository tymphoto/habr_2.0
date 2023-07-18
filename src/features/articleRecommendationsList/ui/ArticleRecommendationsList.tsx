import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';
import { ArticleList } from '@/entities/Article';
import { VStack } from '@/shared/ui/redesigned/Stack';
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
    <VStack
      data-testid="ArticleRecommendationsList"
      gap="16"
      className={classNames('', {}, [className])}
    >
      <Text
        title={t('Рекомендуем')}
        size={TextSize.L}
      />
      <ArticleList
        articles={articles}
        target="_blank"
        isLoading={isLoading}
      />
    </VStack>
  );
});
