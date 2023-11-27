import { SetStateAction } from "react";

// connect.ts
function connect<T>(value: T, send: (action: SetStateAction<T>) => void) {
  const createEventHandler = (eventType: string, itemValue: T) => {
    return {
      [eventType]: () => send(itemValue),
    };
  };

  const getContentProps = (itemValue: T) => {
    return {
      style: {
        display: value === itemValue ? "block" : "none",
      },
    };
  };

  return { createEventHandler, getContentProps };
}

export default connect;
