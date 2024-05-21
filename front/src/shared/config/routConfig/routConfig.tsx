import { DocumentsPage } from "pages/DocumentsPage";
import { MainPage } from "pages/MainPage";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
    MAIN = "main",
    DOCUMENTS = "documents",
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.DOCUMENTS]: "/documents",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.DOCUMENTS]: {
        path: RoutePath.documents,
        element: <DocumentsPage />,
    },
};
