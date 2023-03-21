import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SearchIcon from "../img/search.svg";
import { Link } from "react-router-dom";
import Pretty from "../assests/ex-detales.jpg";

const API_KEY = "api_key=193f93bed7f6ce72c0ffcc407532ed98";
const CastURL = "api_key=8ed200f50a6942ca5bc8b5cdec27ff22";
const UrlSerach = "https://api.themoviedb.org/3/search/";

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [mvOurTv, setmMvOurTv] = useState("movie");

  //https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=${title}
  //https://api.themoviedb.org/3/search/${mvOurTv}?{CastURL}&query=${title}

  const searchMovies = async (title) => {
    let response = await fetch(
      `${UrlSerach}${mvOurTv}?${CastURL}&query=${title}`
    );

    if (title === "tv") {
      response = await fetch(
        `${UrlSerach}${mvOurTv}?${CastURL}&language=en-US&page=1&query=${title}`
      );
    }

    const data = await response.json();

    setMovies(data.results);
  };

  useEffect(() => {
    if (mvOurTv !== "movie") {
      searchMovies(mvOurTv);
    }
  }, [mvOurTv]);


  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      searchMovies(searchTerm);
    }
  };

  return (
    <Container>
      <H1>
        <h1>Search For Movie Or Series</h1>
      </H1>
      <SearchContainer>
        <div>
          <input
            placeholder="Search CineInfo"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <button>
          <img
            src={SearchIcon}
            alt="search"
            onClick={() => searchMovies(searchTerm)}
          />
        </button>
      </SearchContainer>

      <DivButtons>
        <ButtonM mvOurTv={mvOurTv} onClick={() => setmMvOurTv("movie")}>
          Movie
        </ButtonM>
        <ButtonTv mvOurTv={mvOurTv} onClick={() => setmMvOurTv("tv")}>
          Tv Serie
        </ButtonTv>
      </DivButtons>

      {/* {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )} */}

      <Div>
        <Content>
          <SerieList>
            <ContainerWrap>
              {movies.length > 1 ? (
                <Wrap>
                  <Link>
                    <img src={Pretty} alt="imagens" />
                    <Details>
                      <DetailsContent>
                        <p>Pretty Little Liars</p>
                      </DetailsContent>
                    </Details>
                  </Link>
                </Wrap>
              ) : (
                <div>
                  <h2>No movies found</h2>
                </div>
              )}
              <Wrap>
                <Link>
                  <img src={Pretty} alt="imagens" />
                  <Details>
                    <DetailsContent>
                      <p>Pretty Little Liars</p>
                    </DetailsContent>
                  </Details>
                </Link>
              </Wrap>
            </ContainerWrap>
          </SerieList>
        </Content>
      </Div>
    </Container>
  );
};

const DivButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const ButtonM = styled.button`
  padding: 1rem;
  text-transform: uppercase;
  background-color: ${(props) =>
    props.mvOurTv === "movie" ? "red" : "transparent"};
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #c1121f;
  }
`;

const ButtonTv = styled(ButtonM)`
  background-color: ${(props) =>
    props.mvOurTv === "tv" ? "red" : "transparent"};
`;

const Container = styled.main`
  position: relative;
  min-height: 90vh;
  overflow-x: hidden;
  display: block;
  top: 60px;
  padding: 0 calc(3.5vw + 5px);
  margin-bottom: 6rem;
`;

const SearchContainer = styled.div`
  width: 100%;
  margin: 4rem 0 2rem;
  border: 1px solid pink;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 0.3rem;
  border-radius: 5px;

  & > div {
    padding: 1rem 1.75rem;
    width: 95%;
  }

  & > div > input {
    flex: 1;
    border: none;
    font-size: 1.5rem;
    font-family: var(--font-raleway);
    font-weight: 500;
    padding-right: 1rem;
    outline: none;
    color: #a1a1a1;
    background: none;
    transition: all 0.3s ease;
    width: 100%;
  }

  & > button {
    text-align: center;
    height: 50px;
    background-color: transparent;
    border: none;
    border-radius: 50%;

    &:hover {
      background-color: pink;
    }
  }

  & > button > img {
    width: 35px;
    height: 35px;
    cursor: pointer;
  }
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

const SerieList = styled.div`
  max-width: 1366px;
  margin: auto;
  padding: 16px;
  padding-right: 0;
`;

const Wrap = styled.div`
  max-height: 500px;
  max-width: 230px;

  & > a {
    position: relative;
  }

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

const H1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: -4rem;
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

export default Search;
