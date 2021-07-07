import {
  Container,
  Grid,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Paper,
} from "@material-ui/core";
import React from "react";
import { orders } from "./data";
import { useServiceContext } from "shell/Service";

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
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    overflow: "auto",
  },
}));

export default function SettingsPage() {
  const classes = useStyles();
  const serviceContext = useServiceContext();
  React.useEffect(() => {
    serviceContext.setService({ title: "Orders" });
  }, []);
  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography
              component="h1"
              variant="h6"
              color="primary"
              gutterBottom
            >
              Orders
            </Typography>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Ship To</TableCell>
                  <TableCell>Payment Method</TableCell>
                  <TableCell align="right">Sale Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map(({id, date, name, shipTo, paymentMethod, amount}) => (
                  <TableRow key={id}>
                    <TableCell>{date}</TableCell>
                    <TableCell>{name}</TableCell>
                    <TableCell>{shipTo}</TableCell>
                    <TableCell>{paymentMethod}</TableCell>
                    <TableCell align="right">{amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </Container>
    </main>
  );
}
