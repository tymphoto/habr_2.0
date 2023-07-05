import { memo } from 'react';

import { ToggleFeatures } from '@/shared/lib/features';
import { SidebarDeprecated } from './SidebarDeprecated/SidebarDeprecated';
import { SidebarRedesigned } from './SidebarRedesigned/SidebarRedesigned';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => (
  <ToggleFeatures
    feature='isAppRedesigned'
    off={<SidebarDeprecated />}
    on={<SidebarRedesigned />}
  />
));
