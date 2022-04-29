import React from "react";
import Button from "@mui/material/Button";
import StyledMenu from "./StyledMenu";

/**
 *
 * @param {MenuButtonProps} props
 */
function MenuButton(props) {
  const { children, label, ...rest } = props;
  return (
    <div>
      <Button {...rest}>{label}</Button>
      <StyledMenu open={false}>{children}</StyledMenu>
    </div>
  );
}

export default MenuButton;

/**
 * @typedef {{
 *  label: string;
 * } & import("@mui/material").ButtonProps} MenuButtonProps
 */
