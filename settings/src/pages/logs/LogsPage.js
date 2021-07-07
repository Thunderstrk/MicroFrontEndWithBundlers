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
import { logs } from "./data";
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
    serviceContext.setService({ title: "Logs" });
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
              Logs
            </Typography>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Name</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {logs.map(({id, date, name}) => (
                  <TableRow key={id}>
                    <TableCell>{date}</TableCell>
                    <TableCell>{name}</TableCell>
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
