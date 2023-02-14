import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { HStack } from 'shared/ui/Stack';
import { Page } from 'widgets/Page';

const MainPage = () => {
  const { t } = useTranslation('main');
  const [value, setValue] = useState('');

  const onChange = (val: string) => {
    setValue(val);
  };

  return (
    <Page>
      {t('Главная страница')}
      {/* <div>adaslkmfsl</div>
      <HStack>
        <div>adaslkmfsl</div>
        <ListBox
          defaultValue="Выберите значение"
          onChange={(value: string) => { }}
          value={undefined}
          items={[
            { value: '1', content: '1' },
            { value: '2', content: '2', disabled: true },
            { value: '3', content: '3' },
          ]}
        />
      </HStack>
      <div>adaslkmfsl</div>
      <div>adaslkmfsl</div>
      <div>adaslkmfsl</div>
      <div>adaslkmfsl</div> */}
    </Page>
  );
};

export default MainPage;
