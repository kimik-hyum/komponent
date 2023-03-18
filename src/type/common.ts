import { HTMLProps } from "react";

export type SizeType = "small" | "medium" | "large";

export type CommonComponentProps<
  T extends keyof JSX.IntrinsicElements,
  K extends keyof JSX.IntrinsicElements[T] = never
> = Omit<React.ComponentPropsWithoutRef<T>, K> & {
  size?: SizeType;
};
