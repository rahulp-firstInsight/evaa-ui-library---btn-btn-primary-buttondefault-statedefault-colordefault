import React from "react";
import "./style.scss";

interface Props {
  className: any;
}

export const IconCalendar = ({ className }: Props): JSX.Element => {
  return <div className={`icon-calendar ${className} position-relative`} />;
};
