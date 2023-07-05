import { useSelector } from 'react-redux';
import { memo, useMemo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getSidebarItems } from '../../../model/selectors/getSidebarItems';
import { SidebarItem } from '../../SidebarItem/SidebarItem';
import cls from './SidebarRedesigned.module.scss';
import { AppLogo } from '@/shared/ui/AppLogo';
import { VStack } from '@/shared/ui/Stack';

interface SidebarRedesignedProps {
  className?: string;
}

export const SidebarRedesigned = memo(({ className }: SidebarRedesignedProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const sidebarItemsList = useSelector(getSidebarItems);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const itemsList = useMemo(() => sidebarItemsList.map((item) => (
    <SidebarItem
      key={item.path}
      item={item}
      collapsed={collapsed}
    />
  )), [collapsed, sidebarItemsList]);

  return (
    <aside
      data-testid="sidebar"
      className={classNames(
        cls.SidebarRedesigned,
        { [cls.collapsed]: collapsed },
        [className],
      )}
    >
      <AppLogo className={cls.appLogo} />
      <VStack role="navigation" gap="8" className={cls.links}>
        {itemsList}
      </VStack>
    </aside>
  );
});
