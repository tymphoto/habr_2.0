import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { UiDesignSwitcher } from '@/features/uiDesignSwitcher';
import { Text } from '@/shared/ui/redesigned/Text';

const SettingsPage = () => {
  const { t } = useTranslation();
  return (
    <Page data-testid="SettingsPage">
      <VStack gap='16'>
        <Text text={t('Пользовательские настройки')} />
        <UiDesignSwitcher />
      </VStack>
    </Page>
  );
};

export default SettingsPage;
