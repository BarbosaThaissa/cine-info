import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterStelyd>
      <p>
        Copyright &copy;{" "}
        <a href="https://www.instagram.com/thaissabarbosaa/" target="_blank">
          Thaissa Barbosa
        </a>{" "}
        2022. Todos os direitos reservados.
      </p>
    </FooterStelyd>
  );
};

const FooterStelyd = styled.footer`
  background-color: #212529;
  color: white;
  padding: 0.8rem 0;
  width: 100%;
  text-align: center;
  & > p > a {
    color: pink;
    text-decoration: none;
  }
  & > p > a:hover {
    text-decoration: underline;
  }
`;
export default Footer;
