import React from "react";
import "./style.scss";

interface Props {
  className: any;
}

export const IconClose = ({ className }: Props): JSX.Element => {
  return <div className={`icon-close ${className}`} />;
};
