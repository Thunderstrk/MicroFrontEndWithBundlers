import { Route, Switch } from "react-router-dom";
import React from "react";
import dashboardRoutes from "dashboard/routes";
import orderRoutes from "order/routes";
import settingsRoutes from "settings/routes";

const routes = [...dashboardRoutes, ...orderRoutes, ...settingsRoutes];

export default function Router() {
  return (
      <React.Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
              exact={route.exact}
            />
          ))}
          <Route
            path="*"
            component={routes.find(({path}) => path === "/dashboard").component}
          />
        </Switch>
      </React.Suspense>
  )
};

