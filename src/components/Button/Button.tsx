// src/components/Button.tsx
import * as React from "react";
import style from "./Button.module.scss";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  size?: "small" | "medium" | "large";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className = "", size = "small", ...buttonProps }, ref) => {
    console.log(size);
    return (
      <button
        type="button"
        {...buttonProps}
        ref={ref}
        className={`fancy-button ${style[size]}  ${style.button} ${className}`}
      >
        {children}
      </button>
    );
  }
);
