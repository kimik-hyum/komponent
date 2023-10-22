import React, { ReactNode, useContext } from "react";

type CombinedType = AccordionContextType & AccordionItemProps;

type AccordionContextType = {
  disabled?: boolean;
  value?: string;
};

type AccordionItemProps = {
  children: ReactNode;
  className?: string;
};

export const ItemContext = React.createContext<AccordionContextType>({});

export const AccordionItem: React.FC<CombinedType> = ({
  value,
  disabled,
  children,
  ...props
}) => {
  return (
    <ItemContext.Provider value={{ value, disabled }}>
      <div>{children}</div>
    </ItemContext.Provider>
  );
};
