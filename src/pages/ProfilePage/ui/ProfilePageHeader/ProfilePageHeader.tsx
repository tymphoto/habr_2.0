import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import {
  getProfileData,
  getProfileReadonly,
  profileActions,
  updateProfileData,
} from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from 'entities/User';
import { HStack } from 'shared/ui/Stack';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation();
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = authData?.id === profileData?.id;
  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();
  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCanselEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
    onCanselEdit();
  }, [dispatch, onCanselEdit]);

  return (
    <HStack max justify="between" className={classNames('', {}, [className])}>
      <Text title={t('Профиль')} />
      {canEdit && (
        <div>
          {readonly
            ? (
              <Button
                theme={ButtonTheme.OUTLINE}
                onClick={onEdit}
              >
                {t('Редактировать')}
              </Button>
            )
            : (
              <HStack gap="8">
                <Button
                  theme={ButtonTheme.OUTLINE_RED}
                  onClick={onCanselEdit}

                >
                  {t('Отменить')}
                </Button>
                <Button
                  theme={ButtonTheme.OUTLINE}
                  onClick={onSave}

                >
                  {t('Сохранить')}
                </Button>
              </HStack>
            )}
        </div>
      )}
    </HStack>
  );
};
