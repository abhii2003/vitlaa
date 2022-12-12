import React from "react";
import styled from "styled-components";
import { HamburgerMenu } from "../hamburger";

const NavbarContainer = styled.div`

  width: 89%;
  height: 55px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding: 0 1.5em;
  
`;

export function Navbar(props) {
  return (
    <NavbarContainer>
      
      <HamburgerMenu />
    </NavbarContainer>
  );
}