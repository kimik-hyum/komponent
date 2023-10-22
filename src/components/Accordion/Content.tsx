import React, { FC, PropsWithChildren, useContext } from "react";
import { AccordionContext } from "./Root";
import { ItemContext } from "./Item";

export const AccordionContent: FC<PropsWithChildren> = ({
  children,
  ...props
}) => {
  const { activeItem } = useContext(AccordionContext) || {};
  const { value } = useContext(ItemContext);
  const isActice = activeItem === value;
  return isActice ? <div {...props}>{children}</div> : null;
};
