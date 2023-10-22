import React, { useState, useContext, createContext, ReactNode } from "react";

export type AccordionContextType = {
  activeItem?: string;
  setActiveItem: (value: string) => void;
  type: "single" | "multi";
};

export const AccordionContext = createContext<AccordionContextType | undefined>(
  undefined
);

type AccordionRootProps = {
  type?: "single" | "multi";
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
  children: ReactNode;
  className?: string;
};

export const AccordionRoot: React.FC<AccordionRootProps> = ({
  type = "single",
  defaultValue,
  value: controlledValue,
  onChange,
  children,
  ...props
}) => {
  const isControlled = controlledValue !== undefined;
  const [uncontrolledValue, setUncontrolledValue] = useState<
    string | undefined
  >(defaultValue);

  const activeValue = isControlled ? controlledValue : uncontrolledValue;

  const setValue = (newValue: string) => {
    if (!isControlled) {
      setUncontrolledValue(newValue);
    }
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <AccordionContext.Provider
      value={{ activeItem: activeValue, setActiveItem: setValue, type }}
    >
      <div {...props}>{children}</div>
    </AccordionContext.Provider>
  );
};
