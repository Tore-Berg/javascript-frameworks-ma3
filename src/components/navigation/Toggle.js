import React from "react";
import { StyledToggle } from "./Toggle.Styled";
import { FaBars } from "react-icons/fa";

const Toggle = ({ handleNavToggle }) => {
  return (
    <StyledToggle onClick={handleNavToggle}>
      <FaBars />
    </StyledToggle>
  );
};

export default Toggle;
