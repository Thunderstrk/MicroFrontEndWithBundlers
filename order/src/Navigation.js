import React from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import {
  ShoppingCart as ShoppingCartIcon,
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
      <ListItemLink to="/order" icon={<ShoppingCartIcon />} text="Orders" />
    </>
  );
}

export default Navigation;
