import { ComponentRef, forwardRef } from "react";

export type SizeType = "sm" | "md" | "lg";
export type ColorType = "default" | "inherit" | "primary" | "secondary";

export type CommonComponentProps<
  T extends keyof JSX.IntrinsicElements,
  K extends keyof JSX.IntrinsicElements[T] = never
> = Omit<React.ComponentPropsWithoutRef<T>, K> & {
  size?: SizeType;
  color?: ColorType;
};

type AsProp<T extends React.ElementType> = {
  as?: T;
};

// 직관적인 이름을 붙여서 타입으로 만들어준다.
export type PolymorphicRef<
  T extends React.ElementType
> = React.ComponentPropsWithRef<T>["ref"];

// 결합 타입을 만든다.
export type PolymorphicComponentProps<
  T extends React.ElementType,
  Props = {}
> = AsProp<T> &
  React.ComponentPropsWithoutRef<T> &
  Props & {
    ref?: PolymorphicRef<T>;
  };

export type BaseProps<
  T extends React.ElementType,
  F = {}
> = PolymorphicComponentProps<T, F>;

export type BaseComponent<F> = <T extends React.ElementType = "span">(
  props: BaseProps<T, F>
) => React.ReactElement | null;
