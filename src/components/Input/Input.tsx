// src/components/Input.tsx
import * as React from "react";
import style from "./Input.module.scss";

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label: string;
  placeholder?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, ...props }, ref): JSX.Element => {
    const [focused, setFocused] = React.useState(false);
    return (
      <div className={style.inputWrap}>
        <input
          type="text"
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
