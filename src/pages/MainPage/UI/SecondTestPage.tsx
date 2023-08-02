import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { Button } from '@/shared/ui/redesigned/Button';

const SecondTestPage = () => {
  const { t } = useTranslation('main');
  const [value, setValue] = useState('');

  const onChange = (val: string) => {
    setValue(val);
  };

  const onClick = () => {
    console.log('CLICK')
  }

  return (
    <Page data-testid="MainPage">
      {t('Главная страница')}
      <Button
        onClick={onClick}
      // eslint-disable-next-line i18next/no-literal-string
      >
        Click me
      </Button>
    </Page>
  );
};

export default SecondTestPage;
