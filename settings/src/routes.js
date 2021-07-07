import React from "react";

const ProfilePage = React.lazy(() => import("./pages/profile/ProfilePage"));
const LogsPage = React.lazy(() => import("./pages/logs/LogsPage"));

const routes = [
  {
    path: "/settings/profile",
    component: ProfilePage,
    exact: true,
  },
  {
    path: "/settings/logs",
    component: LogsPage,
    exact: true,
  },
];

export default routes;
