import * as React from "react";
import style from "./Input.module.scss";
import { ComponentRef, forwardRef } from "react";
import { useFocus } from "src/hook/useEvent";
import { CommonComponentProps, SizeType } from "src/type/commonTypes";

export interface InputProps extends CommonComponentProps<"input", "size"> {
  label: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, size, ...props }, ref): JSX.Element => {
    const [focused, setFocused] = React.useState(false);
    return (
      <div className={style.inputWrap}>
        <input
          type="text"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...props}
          {...{ ref, id, focused }}
          className={style.input}
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
