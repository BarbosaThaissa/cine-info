import React from "react";
import styled from "styled-components";
//icons
import HomeIcon from '../img/home.svg'

const Header = () => {
  return (
    <Nav>
      <Logo href="/">
        <h1>
          Cine<span>Info</span>
        </h1>
      </Logo>
      <NavMenu>
        Menu
        <img src={HomeIcon} alt="" />
      </NavMenu>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  letter-spacing: 0;

  & > h1 {
    font-family: sans-serif;
    font-weight: bold;
  }

  & > h1 > span {
    color: rgb(255, 0, 0);
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  position: relative;
  margin-left: 25px;
  margin-right: auto;

  @media (max-width: 768px) {
    display: none;
  }
`

export default Header;
