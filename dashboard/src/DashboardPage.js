import React from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import { useServiceContext } from "shell/Service";
import Widget from "./components/Widget";
import { useCookie } from "shell/useCookie";
const RecentOrders = React.lazy(() => import("order/RecentOrdersWidget"));
const SalesDeposits = React.lazy(() => import("sales/DepositsWidget"));
const SalesToday = React.lazy(() => import("sales/TodayWidget"));

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

const DashboardPage = () => {
  const classes = useStyles();
  const serviceContext = useServiceContext();
  const { cookie } = useCookie(
    "@micro-frontend-poc/appdrawer/open"
  );

  console.log("drawer", cookie)

  React.useEffect(() => {
    serviceContext.setService({ title: "Dashboard" });
  }, []);

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8} lg={9}>
            <Widget height="240px">
              <SalesToday />
            </Widget>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Widget height="240px">
              <SalesDeposits />
            </Widget>
          </Grid>
          <Grid item xs={12}>
            <Widget height="500px">
              <RecentOrders />
            </Widget>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}

export default DashboardPage;
