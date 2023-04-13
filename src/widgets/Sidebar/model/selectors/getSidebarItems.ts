import { createSelector } from '@reduxjs/toolkit';
import AboutIcon from '@/shared/assets/icons/AboutIcon.svg';
import MainIcon from '@/shared/assets/icons/MainIcon.svg';
import ProfileIcon from '@/shared/assets/icons/ProfileIcon.svg';
import ArticleIcon from '@/shared/assets/icons/article-20-20.svg';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { getUserAuthData } from '@/entities/User';
import { SidebarItemType } from '../type/sidebar';

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
      {
        path: RoutePath.main,
        text: 'Главная',
        Icon: MainIcon,
      },
      {
        path: RoutePath.about,
        text: 'О сайте',
        Icon: AboutIcon,
      },
    ];
    if (userData) {
      sidebarItemsList.push(
        {
          path: `${RoutePath.profile}${userData.id}`,
          text: 'Профиль',
          Icon: ProfileIcon,
          authOnly: true,
        },
        {
          path: RoutePath.aricles,
          text: 'Статьи',
          Icon: ArticleIcon,
          authOnly: true,
        },
      );
    }
    return sidebarItemsList;
  },
);
