import React from "react";
import styled from "styled-components";
import ImgSlider from "../components/ImgSlider";
import PopularMovies from "../components/PopularMovies";
import PopularSeries from "../components/PopularSeries";
import TopMovies from "../components/TopMovies";
import TopSeries from "../components/TopSeries";

const Home = () => {
  // const URL =
  //   "https://api.themoviedb.org/3/tv/popular?api_key=8ed200f50a6942ca5bc8b5cdec27ff22&language=en-US&page=1";

  // const getTopRatedMovies = async () => {
  //   const res = await fetch(URL);
  //   const data = await res.json();
  //   console.log(data.results);
  // };

  // getTopRatedMovies();

  return (
    <Container>
      <ImgSlider />
      <PopularMovies />
      <PopularSeries />
      <TopSeries />
      <TopMovies />
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

export default Home;
