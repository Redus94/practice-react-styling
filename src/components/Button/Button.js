import React from "react";

import { StyledButton } from "./Button.styled";

const Button = ({ variant, size = "lg", children, active, disabled }) => {
  return (
    <StyledButton
      disabled={disabled}
      active={active}
      variant={variant}
      size={size}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
