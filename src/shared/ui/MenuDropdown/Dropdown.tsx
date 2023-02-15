import { Menu } from '@headlessui/react';
import { Fragment, memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DropdownDirection } from '../../types/ui';
import { AppLink } from '../AppLink/AppLink';
import cls from './Dropdown.module.scss';

export interface DropDownItem {
  disabled?: boolean;
  content?: ReactNode;
  onClick?: () => void;
  href?: string;
}

interface DropdownProps {
  className?: string;
  items: DropDownItem[];
  trigger?: ReactNode;
  direction: DropdownDirection;
}

export const Dropdown = memo((props: DropdownProps) => {
  const {
    className,
    items,
    trigger,
    direction,
  } = props;

  const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom left': cls.menuBottomLeft,
    'bottom right': cls.menuBottomRight,
    'top left': cls.menuTopLeft,
    'top right': cls.menuTopRight,
  };

  const menuClasses = [mapDirectionClass[direction]];

  return (
    <Menu as="div" className={classNames(cls.Dropdown, {}, [className])}>
      <Menu.Button className={cls.btn}>
        {trigger}
      </Menu.Button>
      <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
        {items.map((item) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              type="button"
              disabled={item.disabled}
              onClick={item.onClick}
              className={classNames(cls.item, { [cls.active]: active, [cls.disabled]: item.disabled })}
            >
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <Menu.Item as={AppLink} to={item.href} disabled={item.disabled}>
                {content}
              </Menu.Item>
            );
          }

          return (
            <Menu.Item as={Fragment} disabled={item.disabled}>
              {content}
            </Menu.Item>
          );
        })}

      </Menu.Items>
    </Menu>
  );
});
