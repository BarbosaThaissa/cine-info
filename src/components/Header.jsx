import React, { useState } from "react";
import styled from "styled-components";

//icons
import { FaInstagramSquare, FaLinkedin, FaGithub } from "react-icons/fa";
import HomeIcon from "../img/home.svg";
import Search from "../img/search.svg";
import Tv from "../img/tv.svg";
import Film from "../img/film-reel.svg";

const Header = ({ open, handleMenuClick }) => {
  return (
    <Nav>
      <MenuIcon onClick={handleMenuClick}>
        <MenuIconLine open={open}></MenuIconLine>
        <MenuIconLine open={open}></MenuIconLine>
        <MenuIconLine open={open}></MenuIconLine>
      </MenuIcon>

      <Logo href="/">
        <h1>
          Cine<span>Info</span>
        </h1>
      </Logo>
      <NavMenu>
        <a
          href="/"
          className={window.location.pathname === "/" ? "active" : ""}
        >
          <img src={HomeIcon} alt="home" />
          <span>HOME</span>
        </a>
        <a
          href="/search"
          className={window.location.pathname === "/search" ? "active" : ""}
        >
          <img src={Search} alt="home" />
          <span>SEARCH</span>
        </a>
        <a
          href="/movies"
          className={window.location.pathname === "/movies" ? "active" : ""}
        >
          <img src={Film} alt="home" />
          <span>MOVIES</span>
        </a>
        <a
          href="/series"
          className={window.location.pathname === "/series" ? "active" : ""}
        >
          <img src={Tv} alt="home" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <Contato>
        <a href="https://www.linkedin.com/in/barbosathaissa/">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/thaissabarbosaa/">
          <FaInstagramSquare />
        </a>
        <a href="https://github.com/BarbosaThaissa">
          <FaGithub />
        </a>
      </Contato>
    </Nav>
  );
};

const MenuIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  cursor: pointer;

  @media (min-width: 769px) {
    display: none;
  }
`;

const MenuIconLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: #fafafa;
  transition: transform 0.2s ease-in-out;

  &:first-child {
    transform: translateY(${(props) => (props.open ? "8px" : "0")})
      rotate(${(props) => (props.open ? "45deg" : "0")});
  }

  &:nth-child(2) {
    opacity: ${(props) => (props.open ? "0" : "1")};
  }

  &:last-child {
    transform: translateY(${(props) => (props.open ? "-8px" : "0")})
      rotate(${(props) => (props.open ? "-45deg" : "0")});
  }
`;

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

  & > a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
      margin-right: 4px;
    }

    & > span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      white-space: nowrap;
      position: relative;
      font-weight: bold;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0 0 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0;
        opacity: 0;
        position: absolute;
        right: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Contato = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  margin-top: 5px;

  & > a {
    color: #fafafa;
    font-size: 1.8rem;
  }
  & > a:hover {
    cursor: pointer;
    color: pink;
  }
`;

export default Header;
