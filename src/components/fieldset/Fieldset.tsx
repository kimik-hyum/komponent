// src/components/Input.tsx
import * as React from "react";
import { CommonComponentProps } from "src/type/commonTypes";
import style from "./Fieldset.module.scss";
import clsx from "clsx";

export interface FieldsetProps extends CommonComponentProps<"fieldset"> {
  label: string;
}

const Fieldset = React.forwardRef<HTMLFieldSetElement, FieldsetProps>(
  ({ label, ...props }, ref): JSX.Element => {
    const [focused, setFocused] = React.useState(false);
    return (
      <fieldset className={style.fieldset} {...props}>
        {
          <legend>
            <span>{label}</span>
          </legend>
        }
      </fieldset>
    );
  }
);
export default Fieldset;

Fieldset.displayName = "Fieldset";
