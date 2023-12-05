
import React from "react";

const TestLib = ({ children, onClick, ...rest }) => (
  <button onClick={onClick} {...rest}>
    {children}
  </button>
);

export default TestLib;