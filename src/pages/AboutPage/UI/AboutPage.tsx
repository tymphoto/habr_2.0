import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { Text } from '@/shared/ui/redesigned/Text';
import { Card } from '@/shared/ui/redesigned/Card';
import { VStack } from '@/shared/ui/redesigned/Stack';

const AboutPage = () => {
  const { t } = useTranslation('about');
  return (
    <Page data-testid="AboutPage">
      <Card padding='24' border='partial'>
        <VStack max gap="16" >
          <Text title={t('О сайте')} />
          <Text text={t('Описание')} />
          <Text text={t('Сценарий')} />
          <a href='https://github.com/tymphoto' target='_blank' rel="noreferrer">{t('Github')}</a>
        </VStack>
      </Card>
    </Page>
  );
};

export default AboutPage;
