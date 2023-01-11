import React from "react";
import classes from "./Navigation.module.scss";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import EmailIcon from "@mui/icons-material/Email";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import FlightIcon from "@mui/icons-material/Flight";
import MenuItem from "./MenuItem";

interface LeftMenuProps {
  activeSection: string;
}
const LeftMenu: React.FC<LeftMenuProps> = (props) => {
  const { activeSection } = props;

  return (
    <div className={classes.leftMenuWrapper}>
      <div className={classes.leftMenuContent}>
        <div className={classes.logo}>NOTAM Viewer</div>
        <nav aria-label="main navigation menu">
          <List>
            <MenuItem
              selected={"notams" == activeSection}
              url={"/notams"}
              icon={<FlightIcon />}
              text={"NOTAMs"}
            />
            <MenuItem
              selected={"weather" == activeSection}
              url={"/weather"}
              icon={<ThunderstormIcon />}
              text={"Weather"}
            />
          </List>
        </nav>
        <Divider />
        <nav aria-label="secondary navigation menu">
          <List>
            <MenuItem
              selected={"contact" == activeSection}
              url={"/contact"}
              icon={<EmailIcon />}
              text={"Contact"}
            />
          </List>
        </nav>
      </div>
    </div>
  );
};

export default LeftMenu;
