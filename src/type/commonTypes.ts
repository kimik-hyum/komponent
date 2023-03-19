import { HTMLProps } from "react";

export type SizeType = "sm" | "md" | "lg";
export type ColorType = "default" | "inherit" | "primary" | "secondary";

export type CommonComponentProps<
  T extends keyof JSX.IntrinsicElements,
  K extends keyof JSX.IntrinsicElements[T] = never
> = Omit<React.ComponentPropsWithoutRef<T>, K> & {
  size?: SizeType;
  color?: ColorType;
};
