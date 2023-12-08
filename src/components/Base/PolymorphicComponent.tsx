import { forwardRef } from "react";
import { PolymorphicProps } from "../../type/commonTypes";

export const PolymorphicComponent = forwardRef(
  <C extends React.ElementType = "div">(
    { as, ...props }: PolymorphicProps<C>,
    ref?: React.Ref<React.ElementType>
  ) => {
    const Component: React.ElementType = as || "div";
    return <Component ref={ref} {...props} />;
  }
);
