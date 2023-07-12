import {
  memo,
  Fragment,
  ReactNode,
} from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { mapDirectionClass } from '../../styles/consts';
import { Button } from '../../../Button/Button';
import { HStack } from '../../../Stack';
import cls from './ListBox.module.scss';
import popupCls from '../../styles/popups.module.scss';
import { DropdownDirection } from '@/shared/types/ui';

export interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

interface ListBoxProps {
  className?: string;
  items?: ListBoxItem[];
  value?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
  readonly?: boolean;
  direction: DropdownDirection;
  label?: string;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

export const ListBox = memo((props: ListBoxProps) => {
  const {
    className,
    items,
    value,
    defaultValue,
    onChange,
    readonly,
    direction,
    label,
  } = props;

  const optionsClasses = [mapDirectionClass[direction]];

  return (
    <HStack gap="4">
      {label && <span>{`${label}>`}</span>}
      <HListBox
        disabled={readonly}
        as="div"
        className={classNames(cls.ListBox, {}, [className, popupCls.popup])}
        value={value}
        onChange={onChange}
      >
        <HListBox.Button disabled={readonly} className={cls.trigger}>
          <Button disabled={readonly}>
            {value ?? defaultValue}
          </Button>
        </HListBox.Button>
        <HListBox.Options className={classNames(cls.options, {}, optionsClasses)}>
          {items?.map((item) => (
            <HListBox.Option
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(
                    cls.item,
                    {
                      [popupCls.active]: active,
                      [popupCls.disabled]: item.disabled,
                    },
                  )}
                >
                  {selected && '!!!'}
                  {item.content}
                </li>
              )}

            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  );
});
