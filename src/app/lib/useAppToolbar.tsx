import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { AppRoutes } from "@/shared/const/router";
import { ScrollToolbar } from "@/widgets/ScrollToolbar";
import { useRouteChange } from "@/shared/lib/router/useRouteChange";

export function useAppToolbar() {
  const appRoute = useRouteChange();
  const { t } = useTranslation();

  const toolbarByAppRoute: OptionalRecord<AppRoutes, ReactElement> = {
    [AppRoutes.ARTICLES]: <ScrollToolbar />,
    [AppRoutes.ARICLE_DETAILS]: <ScrollToolbar />,
    // TO DO: fix it for MAIN and ABOUT
    [AppRoutes.MAIN]: <div>{t('Главная страница')}</div>,
    [AppRoutes.ABOUT]: <div>{t('О сайте')}</div>,
  }

  return toolbarByAppRoute[appRoute];
};
