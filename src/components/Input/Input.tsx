// src/components/Button.tsx
import * as React from "react";
import style from "./Input.module.scss";

export interface InputProps {
  label: string;
  id?: string;
  placeholder?: string;
}

export const Input = ({ label, id, placeholder }: InputProps): JSX.Element => {
  return (
    <div className={style.inputWrap}>
      <input
        type="text"
        id={id}
        className={style.input}
        placeholder={placeholder || label}
      />
      <label htmlFor={id} className={style.label}>
        {label}
      </label>
      <fieldset className={style.fieldset}>
        <legend>{label}</legend>
      </fieldset>
    </div>
  );
};
