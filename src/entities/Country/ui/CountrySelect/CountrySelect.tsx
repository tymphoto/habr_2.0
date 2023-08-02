import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { Country } from '../../model/types/country';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const OPTIONS = [
  { value: Country.Ukraine, content: Country.Ukraine },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
  { value: Country.Thailand, content: Country.Thailand },
  { value: Country.US, content: Country.US },
  { value: Country.Germany, content: Country.Germany },
  { value: Country.France, content: Country.France },
];

export const CountrySelect = memo(({
  className, value, onChange, readonly,
}: CountrySelectProps) => {
  const { t } = useTranslation();

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Country);
  }, [onChange]);

  const props = {
    className,
    defaultValue: t('Укажите страну'),
    items: OPTIONS,
    value,
    onChange: onChangeHandler,
    readonly,
    direction: "top right" as const,
    label: t('Укажите страну'),
  }

  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      on={
        <ListBox
          {...props}
        />
      }
      off={
        <ListBoxDeprecated
          {...props}
        />
      }
    />
  );
});
