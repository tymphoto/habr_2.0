import { DropdownDirection } from '@/shared/types/ui';
import cls from './popups.module.scss';

export const mapDirectionClass: Record<DropdownDirection, string> = {
  'bottom left': cls.menuBottomLeft,
  'bottom right': cls.menuBottomRight,
  'top left': cls.menuTopLeft,
  'top right': cls.menuTopRight,
};
