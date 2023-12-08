import { PolymorphicProps } from "../type/commonTypes";
import { PolymorphicComponent } from "./Base/PolymorphicComponent";

type _TextProps = {
  size: number;
  color: string;
};

export type TextProps<C extends React.ElementType> = PolymorphicProps<C> &
  _TextProps;

export const Text = <C extends React.ElementType = "span">({
  as,
  ...props
}: TextProps<C>) => {
  return (
    <PolymorphicComponent
      as={as || "span"}
      style={{ fontSize: props.size, color: props.color }}
      {...props}
    />
  );
};
