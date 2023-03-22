import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SearchIcon from "../img/search.svg";
import { Link } from "react-router-dom";

const API_KEY = "api_key=193f93bed7f6ce72c0ffcc407532ed98";
const CastURL = "api_key=8ed200f50a6942ca5bc8b5cdec27ff22";
//const UrlSerach = "https://api.themoviedb.org/3/search/";
const UrlSerach = "https://api.themoviedb.org/3/search/multi?";

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [mvOurTv, setmMvOurTv] = useState("movie");

  const searchMovies = async (title) => {
    const response = await fetch(
      `${UrlSerach}${CastURL}&language=en-US&query=${title}&page=1&include_adult=false`
    );

    const data = await response.json();

    setMovies(data.results);
  };

  useEffect(() => {
    searchMovies(searchTerm);
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
      <Div>
        <Content>
          <SerieList>
            {movies.length > 0 ? (
              <ContainerWrap>
                {movies.map((movseri) => (
                  <Wrap key={movseri.id}>
                    <Link
                      to={
                        movseri.original_title
                          ? `/detail/${movseri.id}`
                          : `/detail-serie/${movseri.id}`
                      }
                    >
                      <img
                        src={
                          movseri.poster_path !== null
                            ? `https://image.tmdb.org/t/p/original${movseri.poster_path}`
                            : "https://via.placeholder.com/400"
                        }
                        alt={movseri.original_title || movseri.original_name}
                      />
                      <Details>
                        <DetailsContent>
                          <p>
                            {movseri.original_title || movseri.original_name}
                          </p>
                        </DetailsContent>
                      </Details>
                    </Link>
                  </Wrap>
                ))}
              </ContainerWrap>
            ) : (
              <Vazio>
                <h2>Search for a valid movie or series</h2>
              </Vazio>
            )}
          </SerieList>
        </Content>
      </Div>
    </Container>
  );
};

const Vazio = styled.div`
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;

  & > h2 {
    text-transform: uppercase;
  }
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
