import { useTranslation } from 'react-i18next';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Page } from 'widgets/Page';

const ForbiddenPage = () => {
  const { t } = useTranslation();
  return (
    <Page>
      {t('У Вас нет прав на просмотр этой страницы')}
      <Avatar
        size={500}
        // eslint-disable-next-line max-len, i18next/no-literal-string
        src="https://media.makeameme.org/created/its-fine-im-ab597310cd.jpg"
      />
    </Page>
  );
};

export default ForbiddenPage;
