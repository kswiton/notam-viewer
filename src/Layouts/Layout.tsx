import React from "react";
import classes from "./Layout.module.scss";

interface LayoutProps {
  leftPanel?: React.ReactNode;
  topPanel?: React.ReactNode;
  bottomPanel?: React.ReactNode;
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = (props) => {
  const { leftPanel, topPanel, bottomPanel, children } = props;
  return (
    <div className={classes.layout}>
      {leftPanel ? <div className={classes.leftPanel}>{leftPanel}</div> : null}
      <div className={classes.mainPanel}>
        {topPanel ? <div className={classes.topPanel}>{topPanel}</div> : null}
        <div className={classes.contentWrapper}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
