import React from "react";

const OrderPage = React.lazy(() => import("./OrderPage"));

const routes = [
  {
    path: "/order",
    component: OrderPage,
    exact: true,
  },
];

export default routes;
