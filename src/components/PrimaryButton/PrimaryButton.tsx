import React from "react";
import { IconClose } from "../IconClose";
import "bootstrap/dist/css/bootstrap.min.css";

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
      className={`d-flex align-items-center justify-content-center position-relative overflow-hidden ${className}`}
      style={{
        aspectRatio: "3.71",
        backgroundColor: "#40eccf",
        border: "none",
        borderRadius: "8px",
        padding: "8px 20px",
        width: "176px",
        top: "20px",
        left: "12px",
      }}
    >
      <div
        className="text-white font-weight-medium"
        style={{
          fontFamily: '"Inter", Helvetica',
          fontSize: "16px",
          height: "24px",
          textAlign: "center",
          width: "86px",
        }}
      >
        {label}
      </div>
      {hasIcon && <IconClose className="icon-close-instance" />}
    </div>
  );
};
