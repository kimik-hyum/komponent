// src/components/Input/Input.tsx
import style from "./Input.module.scss";
import clsx from "clsx";
import { ComponentRef, forwardRef } from "react";
import { useFocus } from "src/hook/useEvent";
import { CommonComponentProps, SizeType } from "src/type/commonTypes";
import * as React from "react";

export interface InputProps extends CommonComponentProps<"input", "size"> {
  label: string;
  htmlSize?: number;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, size, htmlSize, ...props }, ref): JSX.Element => {
    const [focused, onFocus, onBlur] = useFocus<HTMLInputElement>();
    return (
      <div
        className={clsx(style.inputWrap)}
        data-size={size}
        data-focus={clsx(focused && "on")}
      >
        <input size={htmlSize} {...{ ref, id, onFocus, onBlur }} {...props} />
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
