import React from "react";
import styled from "styled-components";

const Search = () => {
  return (
    <Container>
      <h1>Search page</h1>
      <h1>Search page</h1>
      <h1>Search page</h1>
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

export default Search;
