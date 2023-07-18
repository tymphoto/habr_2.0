import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Card as CardDeprecated, CardTheme } from '@/shared/ui/deprecated/Card';
import cls from './NotificationItem.module.scss';
import { Notification } from '../../model/types/notification';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';
import { Text } from '@/shared/ui/redesigned/Text';

interface NotificationItemProps {
  className?: string;
  item: Notification
}

export const NotificationItem = memo((props: NotificationItemProps) => {
  const { className, item } = props;

  const content = (
    <ToggleFeatures 
    feature='isAppRedesigned'
    on={
      <Card
        className={classNames(cls.NotificationItem, {}, [className])}
      >
        <Text
          title={item.title}
          text={item.description}
        />
      </Card>
    }
      off={
      <CardDeprecated
      theme={CardTheme.OUTLINED}
      className={classNames(cls.NotificationItem, {}, [className])}
    >
      <TextDeprecated
        title={item.title}
        text={item.description}
      />
      </CardDeprecated>
      }
    />
  );

  if (item.href) {
    return (
      <a
        target="_blank"
        rel="noreferrer"
        href={item.href}
        className={cls.link}
      >
        {content}
      </a>
    );
  }

  return (
    content
  );
});
