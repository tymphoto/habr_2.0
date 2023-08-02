import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from '@/shared/ui/deprecated/Text';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Loader } from '@/shared/ui/deprecated/Loader';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { Country, CountrySelect } from '@/entities/Country';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCardRedesigned.module.scss';
import { Input } from '@/shared/ui/redesigned/Input';
import { Card } from '@/shared/ui/redesigned/Card';

interface ProfileCardRedesignedProps {
  className?: string;
  data?: Profile;
  error?: string;
  isLoading?: boolean;
  readonly?: boolean;
  onChangeFirstname?: (value?: string) => void;
  onChangeLastname?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (currency: Currency) => void;
  onChangeCountry?: (country: Country) => void;
}

export const ProfileCardRedesigned = (props: ProfileCardRedesignedProps) => {
  const {
    className,
    data,
    error,
    isLoading,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = props;
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <HStack
        className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}
        justify="center"
        max
      >
        <Loader />
      </HStack>
    );
  }

  if (error) {
    return (
      <HStack
        className={classNames(cls.ProfileCardRedesigned, {}, [className, cls.error])}
        justify="center"
        max
      >
        <Text
          theme={TextTheme.ERROR}
          title={t('Произошла ошибка при загрузке профиля')}
          text={t('Попробуйте обновить страницу')}
          align={TextAlign.CENTER}
        />
      </HStack>
    );
  }

  return (
    <Card
      className={classNames(cls.ProfileCardRedesigned, {}, [className])}
      padding='24'
    >
      <HStack gap="24" max>
        <VStack gap="16" max>
          <Input
            value={data?.first}
            label={t('Имя')}
            className={cls.input}
            onChange={onChangeFirstname}
            readonly={readonly}
            data-testid="ProfileCard.firstname"
          />
          <Input
            value={data?.lastname}
            label={t('Фамилия')}
            className={cls.input}
            onChange={onChangeLastname}
            readonly={readonly}
            data-testid="ProfileCard.lastname"
          />
          <Input
            value={data?.age}
            label={t('Возраст')}
            className={cls.input}
            onChange={onChangeAge}
            readonly={readonly}
            data-testid="ProfileCard.age"
          />
          <Input
            value={data?.city}
            label={t('Город')}
            className={cls.input}
            onChange={onChangeCity}
            readonly={readonly}
            data-testid="ProfileCard.city"
          />
        </VStack>
        <VStack gap="16" max>
          <Input
            value={data?.username}
            label={t('Имя пользователя')}
            className={cls.input}
            onChange={onChangeUsername}
            readonly={readonly}
            data-testid="ProfileCard.username"
          />
          <Input
            value={data?.avatar}
            label={t('Ссылка на аватар')}
            className={cls.input}
            onChange={onChangeAvatar}
            readonly={readonly}
            data-testid="ProfileCard.avatar"
          />
          <CurrencySelect
            className={cls.input}
            value={data?.currency}
            onChange={onChangeCurrency}
            readonly={readonly}
          />
          <CountrySelect
            className={cls.input}
            value={data?.country}
            onChange={onChangeCountry}
            readonly={readonly}
          />
        </VStack>
      </HStack>
    </Card>
  );
};
