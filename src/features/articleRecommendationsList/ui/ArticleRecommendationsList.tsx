import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { ArticleList } from '@/entities/Article';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { useArticleRecommendationsList } from '../api/articleRecommendationsApi';
import { ToggleFeatures } from '@/shared/lib/features';

interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const { data: articles, isLoading, error } = useArticleRecommendationsList(4);

  if (error || !articles) {
    return (
      <ToggleFeatures
        feature='isAppRedesigned'
        on={<Text title={t('Ошибка')} size='l' />}
        off={<TextDeprecated
          title={t('Ошибка')}
          size={TextSize.L}
        />}
      />
    );
  }
  return (
    <VStack
      data-testid="ArticleRecommendationsList"
      gap="16"
      className={classNames('', {}, [className])}
    >
      <ToggleFeatures
        feature='isAppRedesigned'
        on={<Text title={t('Рекомендуем')} size='l' />}
        off={
          <TextDeprecated
            title={t('Рекомендуем')}
            size={TextSize.L}
          />
        }
      />
      <ArticleList
        articles={articles}
        target="_blank"
        isLoading={isLoading}
      />
    </VStack>
  );
});
