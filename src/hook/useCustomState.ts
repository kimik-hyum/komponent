import { useState } from "react";

function useCustomState<T>(defaultValue: T): [T, (value: T) => void] {
  const [value, setValue] = useState<T>(defaultValue);

  const send = (action: T) => {
    setValue(action);
  };

  return [value, send];
}

export default useCustomState;
