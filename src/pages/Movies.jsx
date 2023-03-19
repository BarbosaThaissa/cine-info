import React from "react";
import styled from "styled-components";
import ImgSlider from "../components/ImgSlider";
import Pretty from "../assests/ex-detales.jpg";
import To from "../img/you-serie.jpg";
import { Link } from "react-router-dom";

const Movies = () => {
  return (
    <Container>
      <ImgSlider />
      <br />
      <br />
      <Div>
        <Content>
          <h1>Popular Movies</h1>
          <MoviesList>
            <ContainerWrap>
              <Wrap>
                <Link>
                  <img src={Pretty} alt="imagens" />
                </Link>
              </Wrap>
              <Wrap>
                <Link>
                  <img src={Pretty} alt="imagens" />
                </Link>
              </Wrap>
              <Wrap>
                <Link>
                  <img src={Pretty} alt="imagens" />
                </Link>
              </Wrap>
              <Wrap>
                <Link>
                  <img src={Pretty} alt="imagens" />
                </Link>
              </Wrap>
              <Wrap>
                <Link>
                  <img src={Pretty} alt="imagens" />
                </Link>
              </Wrap>
              <Wrap>
                <Link>
                  <img src={Pretty} alt="imagens" />
                </Link>
              </Wrap>
              <Wrap>
                <Link>
                  <img src={Pretty} alt="imagens" />
                </Link>
              </Wrap>
              <Wrap>
                <Link>
                  <img src={Pretty} alt="imagens" />
                </Link>
              </Wrap>
              <Wrap>
                <Link>
                  <img src={To} alt="imagens" />
                </Link>
              </Wrap>
              <Wrap>
                <Link>
                  <img src={To} alt="imagens" />
                </Link>
              </Wrap>
            </ContainerWrap>
          </MoviesList>
        </Content>
      </Div>
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 60px;
  padding: 0 calc(3.5vw + 5px);
  margin-bottom: 6rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
`;

const Div = styled.div`
  padding: 0 0 26px;
  margin-top: 4rem;
`;

const MoviesList = styled.div`
  max-width: 1366px;
  margin: auto;
  padding: 16px;
  padding-right: 0;
`;

const Wrap = styled.div`
  max-height: 500px;
  max-width: 230px;

  & > a > img {
    width: 100%;
  }

  &:hover {
    transition: all 0.3s;
    transform: scale(1.05);
    border: 2px solid rgba(249, 249, 249, 0.8);
  }

  @media (max-width: 480px) {
    max-width: 180px;
  }
`;

const ContainerWrap = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: row wrap;
  margin-top: -8px;
  width: calc(100% + 8px);
  margin-left: -8px;
  margin-right: -8px !important;
  gap: 0.3rem;
  justify-content: center;
  align-items: center;
`;

const Details = styled.div`
  transition: all 0.3s ease 0s;
  position: absolute;
  width: 100%;
  height: max-content;
  box-sizing: border-box;
  opacity: 1;
  bottom: 0px;
  padding: 0 10px;
  background-color: rgb(0, 0, 0, 40%);
  font-weight: 700;
`;

const DetailsContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Movies;
