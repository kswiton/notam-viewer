import React from "react";
import classes from "./ContentColumn.module.scss";

type ContentColumnVariant = "regular" | "narrow";

interface ContentColumnProps {
  variant?: ContentColumnVariant;
  children: React.ReactNode;
}

const ContentColumn: React.FC<ContentColumnProps> = (props) => {
  const { children, variant = "regular" } = props;

  return <div className={classes[variant]}>{children}</div>;
};

export default ContentColumn;
