import classNames from "classnames";
import * as React from "react";

export enum TextfieldType {
  TEXT = "text",
  PASSWORD = "password",
  EMAIL = "email",
  SEARCH = "search",
  URL = "url",
  TEL = "tel",
  NUMBER = "number",
}

export interface TextfieldProps extends React.HTMLProps<HTMLInputElement> {
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  classes?: {
    root?: string;
    input?: string;
    adornment?: string;
  };
  type?: TextfieldType;
}

const Textfield = React.forwardRef<HTMLInputElement, TextfieldProps>(
  (
    {
      size,
      onFocus: userOnFocus,
      onBlur: userOnBlur,
      startAdornment,
      endAdornment,
      classes,
      type = TextfieldType.TEXT,
      ...props
    },
    ref
  ): JSX.Element => {
    if (!Object.values(TextfieldType).includes(type)) {
      throw new Error(`Invalid input type: "${type}".`);
    }
    const rootClassName = classNames(classes?.root);
    const inputClassName = classNames(classes?.input);
    const commonAdornmentClassName = classNames(classes?.adornment);
    return (
      <div className={rootClassName}>
        {startAdornment && (
          <span className="kui-input-startAdornment">{startAdornment}</span>
        )}
        <input type="text" {...props} {...{ ref }} className={inputClassName} />
        {endAdornment && (
          <span className={commonAdornmentClassName}>{endAdornment}</span>
        )}
      </div>
    );
  }
);
export default Textfield;
