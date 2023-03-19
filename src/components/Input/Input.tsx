// src/components/Input.tsx
import * as React from "react";
import { CommonComponentProps } from "src/type/commonTypes";
import style from "./Input.module.scss";
import clsx from "clsx";

export interface InputProps extends CommonComponentProps<"input", "size"> {
  label: string;
  placeholder?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, size, ...props }, ref): JSX.Element => {
    const [focused, setFocused] = React.useState(false);
    return (
      <div
        className={clsx(style.inputWrap, focused && style.onFocus)}
        data-size={size}
        data-focus={clsx(focused && "on")}
      >
        <input
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...props}
          {...{ ref, id }}
        />
        <label htmlFor={id} className={style.label}>
          {label}
        </label>
        <fieldset className={style.fieldset}>
          {
            <legend>
              <span>{label}</span>
            </legend>
          }
        </fieldset>
      </div>
    );
  }
);
export default Input;

Input.displayName = "Input";
