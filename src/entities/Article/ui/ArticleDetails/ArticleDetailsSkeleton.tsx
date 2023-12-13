import { memo } from 'react';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { toggleFeatures } from '@/shared/lib/features';
import cls from './ArticleDetails.module.scss';
import { VStack } from '@/shared/ui/redesigned/Stack';

export const ArticleDetailsSkeleton = memo(() => {
  const Skeleton = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => SkeletonRedesigned,
    off: () => SkeletonDeprecated,
  })

  return (
    <VStack gap='16' max>
      <Skeleton
        className={cls.avatar}
        width={200}
        height={200}
        border="50%"
      />
      <Skeleton className={cls.title} width={300} height={32} />
      <Skeleton className={cls.skeleton} width={600} height={24} />
      <Skeleton className={cls.skeleton} width="100%" height={200} />
      <Skeleton className={cls.skeleton} width="100%" height={200} />
    </VStack>
  );
});
