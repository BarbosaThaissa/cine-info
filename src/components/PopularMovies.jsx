import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImgTest from "../assests/ex-larga.jpg";

const PopularMovies = () => {
  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Container>
      <Title>
        <h4>Popular Movies</h4>
      </Title>

      <Carousel {...settings}>
        <Wrap>
          <Link to={`/detail/4545`}>
            <img src={ImgTest} alt="" />
            <Details>
              <DetailsContent>
                <p>2023</p>
                <p>Pretty Little Liars</p>
              </DetailsContent>
            </Details>
          </Link>
        </Wrap>
        <Wrap>
          <Link to={`/detail/4545`}>
            <img src={ImgTest} alt="" />
            <Details>
              <DetailsContent>
                <p>2023</p>
                <p>Pretty Little Liars</p>
              </DetailsContent>
            </Details>
          </Link>
        </Wrap>
        <Wrap>
          <Link to={`/detail/4545`}>
            <img src={ImgTest} alt="" />
            <Details>
              <DetailsContent>
                <p>2023</p>
                <p>Pretty Little Liars</p>
              </DetailsContent>
            </Details>
          </Link>
        </Wrap>
        <Wrap>
          <Link to={`/detail/4545`}>
            <img src={ImgTest} alt="" />
            <Details>
              <DetailsContent>
                <p>2023</p>
                <p>Pretty Little Liars</p>
              </DetailsContent>
            </Details>
          </Link>
        </Wrap>
        <Wrap>
          <Link to={`/detail/4545`}>
            <img src={ImgTest} alt="" />
            <Details>
              <DetailsContent>
                <p>2023</p>
                <p>Pretty Little Liars</p>
              </DetailsContent>
            </Details>
          </Link>
        </Wrap>
        <Wrap>
          <Link to={`/detail/4545`}>
            <img src={ImgTest} alt="" />
            <Details>
              <DetailsContent>
                <p>2023</p>
                <p>Pretty Little Liars</p>
              </DetailsContent>
            </Details>
          </Link>
        </Wrap>
        <Wrap>
          <Link to={`/detail/4545`}>
            <img src={ImgTest} alt="" />
            <Details>
              <DetailsContent>
                <p>2023</p>
                <p>Pretty Little Liars</p>
              </DetailsContent>
            </Details>
          </Link>
        </Wrap>
        <Wrap>
          <Link to={`/detail/4545`}>
            <img src={ImgTest} alt="" />
            <Details>
              <DetailsContent>
                <p>2023</p>
                <p>Pretty Little Liars</p>
              </DetailsContent>
            </Details>
          </Link>
        </Wrap>
      </Carousel>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 0 26px;
  margin-top: 4rem;
`;

const Title = styled.div`
  position: relative;
  max-width: 1366px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  & > h4 {
    font-size: 1.5rem;
    line-height: 1.334;
    letter-spacing: 0em;
    font-weight: 700;
    text-transform: uppercase;
  }

  &:before {
    content: "";
    position: absolute;
    top: 100%;
    height: 5px;
    width: 100px;
    background-color: rgb(255, 0, 0);

    @media (min-width: 0px) {
      left: 20px;
    }

    @media (min-width: 900px) {
      left: 0px;
    }
  }

  @media (min-width: 0px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (min-width: 900px) {
    padding-left: 0px;
    padding-right: 0px;
  }
`;

const Carousel = styled(Slider)`
  margin-top: 20px;
  max-height: 30vh;

  & > button {
    // opacity: 0;
    margin: 0 1rem;
    height: 100%;
    width: 10vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -75px;
  }

  .slick-next {
    right: -75px;
  }

  .slick-next:before {
    color: red;
    font-size: 1.5rem;
  }

  .slick-prev:before {
    color: red;
    font-size: 1.5rem;
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  border: 2px solid rgba(249, 249, 249, 0.1);
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  & > a {
    max-width: 1150px;
    max-height: 225px;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;

    & > img {
      width: 100%;
      max-height: 60vh;
      height: 100%;
      object-fit: cover;
    }
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
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

  @media (max-width: 500px) {
    display: none;
  }
`;

const DetailsContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export default PopularMovies;

// {movies &&
//   movies.map((movie, key) => (
//     <Wrap key={key}>
//       {movie.id}
//       <Link to={`/detail/` + movie.id}>
//         <img src={movie.cardImg} alt={movie.title} />
//       </Link>
//     </Wrap>
//   ))}
