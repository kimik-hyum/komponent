// src/components/Input.tsx
import style from "./Input.module.scss";
import clsx from "clsx";
import { ComponentRef, forwardRef } from "react";
import React from "react";
import { CommonComponentProps } from "src/type/commonTypes";
import { createPolymorphicComponent } from "src/lib/util";

const Input = createPolymorphicComponent({
  tag: "input",
  omitProps: ["size", "alt"],
})<{
  label: string;
}>()(({ label, id, size, ...props }, ref) => {
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
});
export default Input;

Input.displayName = "Input";
