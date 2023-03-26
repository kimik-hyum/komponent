import { ComponentRef, forwardRef, HTMLProps } from "react";

export type SizeType = "sm" | "md" | "lg";

export type CommonComponentProps<
  T extends keyof JSX.IntrinsicElements = "div",
  K extends keyof JSX.IntrinsicElements[T] = never
> = Omit<React.ComponentPropsWithoutRef<T>, K> & {
  size?: SizeType;
};
