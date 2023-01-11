import Link from "next/link";
import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import classes from "./Navigation.module.scss";

interface MenuItemProps {
  url: string;
  icon: React.ReactNode;
  text: string;
  selected: boolean;
}
const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { url, icon, text, selected } = props;
  return (
    <Link href={url} className={classes.navLink}>
      <ListItem disablePadding>
        <ListItemButton selected={selected}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default MenuItem;
