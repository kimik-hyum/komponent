import { useState } from "react";

type SetStateAction<T> = T | ((currentValue: T) => T);

function useCustomState<T>(
  defaultValue: T
): [T, (action: SetStateAction<T>) => void] {
  const [value, setValue] = useState<T>(defaultValue);

  const send = (action: SetStateAction<T>) => {
    setValue(action);
  };

  return [value, send];
}

export default useCustomState;
