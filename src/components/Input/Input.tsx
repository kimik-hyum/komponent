import * as React from "react";
import style from "./Input.module.scss";
import { CommonComponentProps, SizeType } from "src/type/commonTypes";

export enum InputType {
  TEXT = "text",
  PASSWORD = "password",
  EMAIL = "email",
  SEARCH = "search",
  URL = "url",
  TEL = "tel",
  NUMBER = "number",
}

export interface InputProps extends CommonComponentProps<"input", "size"> {
  label: string;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  type?: InputType;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      id,
      size,
      onFocus: userOnFocus,
      onBlur: userOnBlur,
      startAdornment,
      endAdornment,
      type = InputType.TEXT,
      ...props
    },
    ref
  ): JSX.Element => {
    const [focused, setFocused] = React.useState(false);
    if (!Object.values(InputType).includes(type)) {
      throw new Error(`Invalid input type: "${type}".`);
    }

    return (
      <div className={`${style.inputWrap} kui-input-root`}>
        {startAdornment && (
          <span className="kui-input-startAdornment">{startAdornment}</span>
        )}
        <input
          type="text"
          onFocus={(e) => {
            setFocused(true);
            userOnFocus?.(e);
          }}
          onBlur={(e) => {
            setFocused(false);
            userOnBlur?.(e);
          }}
          {...props}
          {...{ ref, id, focused }}
          className={`${style.input} kui-input-base"`}
        />
        {endAdornment && (
          <span className="kui-input-endAdornment">{endAdornment}</span>
        )}
        <label htmlFor={id} className={`${style.label} kui-input-label`}>
          {label}
        </label>
        <fieldset className={`${style.fieldset} kui-input-fieldset`}>
          <legend className="kui-input-legend">
            <span>{label}</span>
          </legend>
        </fieldset>
      </div>
    );
  }
);
export default Input;
