import { memo } from 'react';
import CircleIcon from '@/shared/assets/icons/circle-up.svg';
// import { classNames } from '@/shared/lib/classNames/classNames';
// import cls from './ScrollToTopButton.module.scss';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface ScrollToTopButtonProps {
  className?: string;
}

export const ScrollToTopButton = memo((props: ScrollToTopButtonProps) => {
  const { className } = props;

  const onClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Icon
      Svg={CircleIcon}
      // className={classNames(cls.ScrollToTopButton, {}, [className])}
      width={32}
      height={32}
      clickable
      onClick={onClick}
    />

  );
});
