import React from "react";
import { IconClose } from "../IconClose";
import "./style.scss";

interface Props {
  label: string;
  hasIcon: boolean;
  btnBtnPrimaryButton: "default";
  state: "default";
  color: "default";
  className: any;
}

export const PrimaryButton = ({
  label = "Button",
  hasIcon = true,
  btnBtnPrimaryButton,
  state,
  color,
  className,
}: Props): JSX.Element => {
  return (
    <div
      className={`d-flex align-items-center justify-content-center btn btn-primary ${className}`}
    >
      <div className="text-white">{label}</div>
      {hasIcon && <IconClose className="icon-close-instance" />}
    </div>
  );
};
