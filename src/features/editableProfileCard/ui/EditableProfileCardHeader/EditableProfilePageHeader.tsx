import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Button } from '@/shared/ui/redesigned/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from '@/entities/User';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { getProfileData } from '../../model/selecetors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selecetors/getProfileReadonly/getProfileReadonly';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';

interface ProfilePageHeaderProps {
  className?: string;
}

export const EditableProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
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
    <ToggleFeatures
      feature='isAppRedesigned'
      on={
        <Card max padding='24' border='partial'>
          <HStack max justify="between" className={classNames('', {}, [className])}>
            <Text title={t('Профиль')} />
            {canEdit && (
              <div>
                {readonly
                  ? (
                    <Button
                      variant='outline'
                      onClick={onEdit}
                      data-testid="EditableProfilePageHeader.EditButton"
                    >
                      {t('Редактировать')}
                    </Button>
                  )
                  : (
                    <HStack gap="8">
                      <Button
                        variant='outline'
                        color='error'
                        onClick={onCanselEdit}
                        data-testid="EditableProfilePageHeader.CancelButton"
                      >
                        {t('Отменить')}
                      </Button>
                      <Button
                        variant='outline'
                        color='success'
                        onClick={onSave}
                        data-testid="EditableProfilePageHeader.SaveButton"
                      >
                        {t('Сохранить')}
                      </Button>
                    </HStack>
                  )}
              </div>
            )}
          </HStack>
        </Card>
      }
      off={
        <HStack max justify="between" className={classNames('', {}, [className])}>
          <TextDeprecated title={t('Профиль')} />
          {canEdit && (
            <div>
              {readonly
                ? (
                  <ButtonDeprecated
                    theme={ButtonTheme.OUTLINE}
                    onClick={onEdit}
                    data-testid="EditableProfilePageHeader.EditButton"
                  >
                    {t('Редактировать')}
                  </ButtonDeprecated>
                )
                : (
                  <HStack gap="8">
                    <ButtonDeprecated
                      theme={ButtonTheme.OUTLINE_RED}
                      onClick={onCanselEdit}
                      data-testid="EditableProfilePageHeader.CancelButton"
                    >
                      {t('Отменить')}
                    </ButtonDeprecated>
                    <ButtonDeprecated
                      theme={ButtonTheme.OUTLINE}
                      onClick={onSave}
                      data-testid="EditableProfilePageHeader.SaveButton"
                    >
                      {t('Сохранить')}
                    </ButtonDeprecated>
                  </HStack>
                )}
            </div>
          )}
        </HStack>
      }
    />
  );
};
