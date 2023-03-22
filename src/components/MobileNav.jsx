import React, { useState } from "react";
import { IoMdArrowForward } from "react-icons/io";
import styled from "styled-components";
import HomeIcon from "../img/home.svg";
import Search from "../img/search.svg";
import Tv from "../img/tv.svg";
import Film from "../img/film-reel.svg";

const MobileNav = (props) => {
  const { open, setOpen, handleItemClick } = props;

  return (
    <Menu open={open}>
      <MenuItems>
        <ContainerLogo>
          <Logo>
            <h1>
              Cine<span>Info</span>
            </h1>
          </Logo>
        </ContainerLogo>

        <UlLinks>
          <h6>MENU</h6>
          <a
            href="/"
            onClick={handleItemClick}
            className={window.location.pathname === "/" ? "active" : ""}
          >
            <img src={HomeIcon} alt="home" />
            <span>HOME</span>
          </a>
          <a
            href="/search"
            onClick={handleItemClick}
            className={window.location.pathname === "/search" ? "active" : ""}
          >
            <img src={Search} alt="home" />
            <span>SEARCH</span>
          </a>
          <a
            href="/movies"
            onClick={handleItemClick}
            className={window.location.pathname === "/movies" ? "active" : ""}
          >
            <img src={Film} alt="home" />
            <span>MOVIES</span>
          </a>
          <a
            href="/series"
            onClick={handleItemClick}
            className={window.location.pathname === "/series" ? "active" : ""}
          >
            <img src={Tv} alt="home" />
            <span>SERIES</span>
          </a>
        </UlLinks>
        <Button onClick={handleItemClick}>
          <IoMdArrowForward />
        </Button>
      </MenuItems>
    </Menu>
  );
};

const Button = styled.button`
  width: 70%;
  margin: 0 auto;
  padding: 0.7rem 0;
  background-color: black;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  margin-top: 2rem;

  & > svg {
    font-size: 1rem;
    height: 100%;
    color: white;
  }

  &:hover {
    background-color: #111;
  }
`;

const Menu = styled.div`
  width: 60%;
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: ${(props) => (props.open === true ? "0" : "-110%")};
  opacity: 1;
  background-color: rgb(19, 19, 19);
  background-image: linear-gradient(
    rgba(255, 255, 255, 0.15),
    rgba(255, 255, 255, 0.15)
  );
  padding: 0 1rem;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 10px -5px,
    rgba(0, 0, 0, 0.14) 0px 16px 24px 2px, rgba(0, 0, 0, 0.12) 0px 6px 30px 5px;
  transition: 0.3s;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1200;
`;

const MenuItems = styled.div`
  color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1 0 auto;
  z-index: 1200;
`;

const ContainerLogo = styled.div`
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 20px 16px;
  min-height: 56px;
  color: rgb(255, 255, 255);

  @media (min-width: 600px) {
    min-height: 64px;
    padding-left: 24px;
    padding-right: 24px;
  }
`;

const Logo = styled.a`
  padding: 0;
  letter-spacing: 0;
  display: flex;
  flex-direction: row;
  width: 100%;
  -webkit-box-pack: center;
  justify-content: center;

  & > h1 {
    font-family: sans-serif;
    font-weight: bold;
  }

  & > h1 > span {
    color: rgb(255, 0, 0);
  }
`;

const UlLinks = styled.ul`
  list-style: none;
  margin: 0px;
  position: relative;
  padding: 8px 30px;

  & > h6 {
    margin: 0px 0px 20px;
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 1.6;
    letter-spacing: 0.0075em;
  }

  & > a {
    display: flex;
    align-items: center;
    padding: 1rem;
    border-radius: 10px;
    font-weight: bold;
    gap: 1rem;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
      margin-right: 4px;
    }

    &:hover {
      background-color: #222;
    }
  }
`;

export default MobileNav;
