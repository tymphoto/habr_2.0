import { memo } from 'react';
import { getRouteProfile } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { IComment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';

interface CommentCardProps {
  className?: string;
  comment?: IComment;
  isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
  const { className, comment, isLoading } = props;

  const Skeleton = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => SkeletonRedesigned,
    off: () => SkeletonDeprecated,
  })

  if (isLoading) {
    return (
      <VStack
        gap="8"
        max
        className={classNames(cls.CommentCard, {}, [className, cls.loading])}
        data-testid="CommentCard.Loading"
      >
        <div className={cls.header}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton width={100} height={16} className={cls.username} />
        </div>
        <Skeleton width="100%" height={50} className={cls.text} />
      </VStack>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      on={
        <Card padding='24' border='partial' max>
          <VStack
            gap="8"
            max
            className={classNames(cls.CommentCardRedesigned, {}, [className])}
            data-testid="CommentCard.Content"
          >
            <AppLink to={getRouteProfile(comment.user.id)}>
              <HStack gap='8'>
                {comment?.user.avatar
                  ? (
                    <Avatar
                      size={30}
                      src={comment.user.avatar}
                    />
                  )
                  : null}
                <Text
                  text={comment.user.username}
                  bold
                />
              </HStack>
            </AppLink>
            <Text
              text={comment.text}
            />
          </VStack>
        </Card>
      }
      off={
        <VStack
          gap="8"
          max
          className={classNames(cls.CommentCard, {}, [className])}
          data-testid="CommentCard.Content"
        >
          <AppLinkDeprecated to={getRouteProfile(comment.user.id)} className={cls.header}>
            {comment?.user.avatar
              ? (
                <AvatarDeprecated
                  size={30}
                  src={comment.user.avatar}
                />
              )
              : null}
            <TextDeprecated
              className={cls.username}
              title={comment.user.username}
            />
          </AppLinkDeprecated>
          <TextDeprecated
            className={cls.text}
            text={comment.text}
          />
        </VStack>
      }
    />
  );
});
