import { useState } from "react";

type ActionHandler<T> = (itemValue: T) => void;
type EventHandlerFactory<T> = (
  eventType: string,
  itemValue: T,
  actionType?: "update" | "toggle"
) => Record<string, () => void>;

// 반환 타입을 객체로 명시
function useCustomState<T>(defaultValue: T): {
  value: T;
  createEventHandler: EventHandlerFactory<T>;
  getContentProps: (itemValue: T) => { style: { display: string } };
} {
  const [value, setValue] = useState<T>(defaultValue);

  const toggleValue = (toggleValue: T) => {
    setValue((currentValue) =>
      currentValue === toggleValue ? defaultValue : toggleValue
    );
  };

  const createEventHandler: EventHandlerFactory<T> = (
    eventType,
    itemValue,
    actionType = "update"
  ) => {
    return {
      [eventType]: () => {
        if (actionType === "update") {
          setValue(itemValue);
        } else if (actionType === "toggle") {
          toggleValue(itemValue);
        }
      },
    };
  };

  const getContentProps = (itemValue: T) => {
    return {
      style: {
        display: value === itemValue ? "block" : "none",
      },
    };
  };

  return { value, createEventHandler, getContentProps };
}

export default useCustomState;
