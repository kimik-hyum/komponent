import React, { ReactNode, useContext } from "react";
import { AccordionContext } from "./Root";

type AccordionContextType = {
  disabled?: boolean;
  value?: string;
};

type AccordionItemProps = {
  children: ((context: { active: boolean }) => ReactNode) | ReactNode;
  className?: string;
};

export const ItemContext = React.createContext<AccordionContextType>({});

export const AccordionItem: React.FC<AccordionItemProps & AccordionContextType> = ({
  value,
  disabled,
  children,
  ...props
}) => {
  const { activeItem } = useContext(AccordionContext) || {};
  const isActive = activeItem === value;

  const isFunction = (child: any): child is (context: { active: boolean }) => ReactNode => {
    return typeof child === 'function';
  }

  return (
    <ItemContext.Provider value={{ value, disabled }}>
      <div>
        {isFunction(children) ? children({ active: isActive }) : children}
      </div>
    </ItemContext.Provider>
  );
};