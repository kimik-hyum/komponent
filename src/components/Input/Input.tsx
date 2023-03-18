// src/components/Input.tsx
import * as React from "react";
import { CommonComponentProps, SizeType } from "src/type/common";
import style from "./Input.module.scss";

export interface InputProps extends CommonComponentProps<"input", "size"> {
  label: string;
  placeholder?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, size, ...props }, ref): JSX.Element => {
    const [focused, setFocused] = React.useState(false);
    return (
      <div className={`${style.inputWrap} ${size}`}>
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
          {<legend>{label}</legend>}
        </fieldset>
      </div>
    );
  }
);
export default Input;

Input.displayName = "Input";
