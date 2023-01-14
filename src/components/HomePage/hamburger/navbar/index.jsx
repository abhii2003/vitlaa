import React from "react";
import styled from "styled-components";
import { HamburgerMenu } from "..";

const NavbarContainer = styled.div`

  width: 85%;
  height: 55px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding: 0 1.5em;
  user-select: none;
  
`;

export function Navbar(props) {
  return (
    <NavbarContainer>

      <HamburgerMenu />
    </NavbarContainer>
  );
}