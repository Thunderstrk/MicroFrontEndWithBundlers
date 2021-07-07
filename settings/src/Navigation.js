import React from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from "@material-ui/core";
import {
  Person as UserIcon,
  List as ListIcon,
} from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";

function ListItemLink(props) {
  // const selected = useMatch(props.to);

  const location = useLocation();
  const selected = location.pathname === props.to;

  const CustomLink = React.useMemo(
    () =>
      React.forwardRef((linkProps, ref) => (
        <Link ref={ref} to={props.to} {...linkProps} />
      )),
    [props.to]
  );

  return (
    <li>
      <ListItem selected={selected} button component={CustomLink}>
        <ListItemIcon>{props.icon}</ListItemIcon>
        <ListItemText primary={props.text} />
      </ListItem>
    </li>
  );
}

function Navigation() {
  return (
    <>
      <Typography
        component="h1"
        variant="subtitle1"
        gutterBottom
        align="center"
      >
        Settings
      </Typography>
      <ListItemLink to="/settings/profile" icon={<UserIcon />} text="Profile" />
      <ListItemLink to="/settings/logs" icon={<ListIcon />} text="Logs" />
    </>
  );
}

export default Navigation;
