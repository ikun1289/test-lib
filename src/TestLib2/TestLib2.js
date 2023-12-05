
import React from "react";

const TestLib2 = ({ children, onClick, ...rest }) => (
  <button onClick={onClick} {...rest}>
    {children}
  </button>
);

export default TestLib2;