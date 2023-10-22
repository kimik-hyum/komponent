import React, { FC, PropsWithChildren, useContext } from "react";
import { AccordionContext } from "./Root";
import { ItemContext } from "./Item";

export const AccordionTirgger: FC<PropsWithChildren> = ({
  children,
  ...props
}) => {
  const { activeItem, setActiveItem, type } =
    useContext(AccordionContext) || {};
  const { value, disabled } = useContext(ItemContext);
  const isActive = activeItem === value;

  const handleClick = () => {
    if (type === "single") {
      setActiveItem?.(!!isActive ? "" : value || "");
    }
  };

  return (
    <div {...props}>
      <button onClick={handleClick} {...{ disabled }} type="button">
        {children}
      </button>
    </div>
  );
};
