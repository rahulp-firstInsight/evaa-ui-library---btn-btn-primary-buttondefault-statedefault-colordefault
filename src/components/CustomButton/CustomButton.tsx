import React from "react";
import "./CustomButton.scss";

interface CustomButtonProps {
  label?: string;
  hasIcon?: boolean;
  variant?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  label = "Button",
  hasIcon = true,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  className = "",
}) => {
  const sizeClasses = {
    sm: "btn-sm",
    md: "",
    lg: "btn-lg"
  };

  const buttonClasses = [
    "btn",
    `btn-${variant}`,
    sizeClasses[size],
    "d-flex",
    "align-items-center",
    "justify-content-center",
    "gap-2",
    "custom-button",
    className
  ].filter(Boolean).join(" ");

  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      <span className="button-text">{label}</span>
      {hasIcon && (
        <svg
          className="button-icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 6L6 18M6 6L18 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
};
