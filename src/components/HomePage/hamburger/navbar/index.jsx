import React from "react";
import styled from "styled-components";
import { HamburgerMenu } from "..";

const NavbarContainer = styled.div`

  width: 100%;
  height: 50px;
  display:flex;  
  flex-direction: row-reverse;
  align-items: center;
  padding: 0 1.5em;
  user-select: none;
  position:fixed;
  z-index:10;
  height:4.5%;
  background-color:black;
  opacity:0.9;
  

  
`;

export function Navbar(props) {
  return (
    <NavbarContainer className="navBarmobi">

      <HamburgerMenu />
    </NavbarContainer>
  );
}