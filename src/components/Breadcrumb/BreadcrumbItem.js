import React from "react";

import StyledBreadcrumbItem from "./BreadcrumbItem.styled";

const BreadcrumbItem = ({ href, children, active }) => {
  return (
    <StyledBreadcrumbItem active={active}>
      {href ? <a href={href}>{children}</a> : children}
    </StyledBreadcrumbItem>
  );
};

export default BreadcrumbItem;