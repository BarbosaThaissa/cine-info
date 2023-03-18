import React from "react";
import styled from "styled-components";
import ImgSlider from "../components/ImgSlider";

const TvSeries = () => {
  return (
    <Container>
      <ImgSlider />
      <h1>TvSeries page</h1>
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

export default TvSeries;
