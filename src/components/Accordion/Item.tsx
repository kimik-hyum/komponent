import React, { ReactNode, useContext, forwardRef, ElementType } from "react";
import { AccordionContext } from "./Root";
import { isFunctionChild } from "../../util/util";
import {
  PolymorphicComponentProps,
  PolymorphicRef,
} from "../../type/commonTypes";

type _ItemProps = {
  value: string;
  disabled?: boolean;
  children: ReactNode | (({ active }: { active: boolean }) => ReactNode);
};

export type ItemProps<T extends React.ElementType> = PolymorphicComponentProps<
  T,
  _ItemProps
> &
  React.RefAttributes<T>;

type ItemComponent<T extends React.ElementType = "span"> =
  React.ForwardRefExoticComponent<
    React.PropsWithoutRef<ItemProps<T>> & React.RefAttributes<T>
  >;

// export const AccordionItem = forwardRef<ElementType, AccordionItemProps<ElementType>>(
//   ({ value, disabled, children, as, ...props }, ref) => {
const AccordionItem = forwardRef(
  <T extends React.ElementType = "span">(
    { value, disabled, children, as, ...props }: ItemProps<T>,
    ref: React.Ref<T>
  ) => {
    const { activeItem } = useContext(AccordionContext) || {};
    const isActive = activeItem === value;
    const Element = as || "span";

    return (
      <Element ref={ref} {...props}>
        {isFunctionChild(children) ? children({ active: isActive }) : children}
      </Element>
    );
  }
) as ItemComponent;

export default AccordionItem;
