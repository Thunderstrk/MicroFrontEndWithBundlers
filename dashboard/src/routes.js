import React from "react";

const DashboardPage = React.lazy(() => import("./DashboardPage"));

const routes = [
  {
    path: "/dashboard",
    component: DashboardPage,
    exact: true,
  },
];

export default routes;
