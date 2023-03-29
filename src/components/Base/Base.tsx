// src/components/Input/Input.tsx
import style from "./Input.module.scss";
import clsx from "clsx";
import { ComponentRef, forwardRef } from "react";
import { useFocus } from "src/hook/useEvent";
import {
  BaseComponent,
  BaseProps,
  PolymorphicRef,
  SizeType,
} from "src/type/commonTypes";
import * as React from "react";

type FormBase = {
  label: string;
};

export const Base: BaseComponent<FormBase> = forwardRef(
  <T extends React.ElementType = "span">(
    { as, label, ...props }: BaseProps<T, FormBase>,
    ref: PolymorphicRef<T>["ref"]
  ) => {
    const Element = as || "span";
    return <Element ref={ref} {...props} />;
  }
);
