// useFocus.ts
import { useState, FocusEventHandler, MouseEventHandler } from "react";

function useFocus<T extends HTMLElement>(): [
  boolean,
  FocusEventHandler<T>,
  FocusEventHandler<T>
] {
  const [focused, setFocused] = useState(false);

  const onFocus: FocusEventHandler<T> = (e) => {
    setFocused(true);
  };

  const onBlur: FocusEventHandler<T> = (e) => {
    setFocused(false);
  };

  return [focused, onFocus, onBlur];
}

function useHover<T extends HTMLElement>(): [
  boolean,
  MouseEventHandler<T>,
  MouseEventHandler<T>
] {
  const [hovered, setHovered] = useState(false);

  const onMouseEnter: MouseEventHandler<T> = (e) => {
    setHovered(true);
  };

  const onMouseLeave: MouseEventHandler<T> = (e) => {
    setHovered(false);
  };

  return [hovered, onMouseEnter, onMouseLeave];
}

export { useFocus, useHover };
