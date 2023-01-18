import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
      ARTICLE DETAILS
    </div>
  );
};

export default memo(ArticleDetailsPage);
