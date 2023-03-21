import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import PlayIcon from "../img/play-icon.png";
import { Link } from "react-router-dom";

import You from "../img/you-serie.jpg";
import Prety from "../assests/ex-detales.jpg";

const API_KEY = "api_key=193f93bed7f6ce72c0ffcc407532ed98";
const CastURL = "api_key=8ed200f50a6942ca5bc8b5cdec27ff22";
const moviesURL = "https://api.themoviedb.org/3/movie/";

const Detail = () => {
  const { id } = useParams();
  const [detailResult, setDetailResult] = useState(null);
  const [detailCast, setDetailCast] = useState(null);

  const getMovie = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/943822?${CastURL}&append_to_response=credits,videos`
    );
    const data = await res.json();
    console.log(data);
    // setMovie(data);
  };

  //getMovie()

  const test = [
    {
      adult: false,
      backdrop_path: "/2Eewgp7o5AU1xCataDmiIL2nYxd.jpg",
      belongs_to_collection: null,
      budget: 0,
      genres: [
        {
          id: 18,
          name: "Drama",
        },
        {
          id: 36,
          name: "History",
        },
      ],
      homepage: "",
      id: 943822,
      imdb_id: "tt4471908",
      original_language: "en",
      original_title: "Prizefighter: The Life of Jem Belcher",
      overview:
        "At the turn of the 19th century, Pugilism was the sport of kings and a gifted young boxer fought his way to becoming champion of England.",
      popularity: 2682.314,
      poster_path: "/x3PIk93PTbxT88ohfeb26L1VpZw.jpg",
      production_companies: [],
      production_countries: [
        {
          iso_3166_1: "GB",
          name: "United Kingdom",
        },
      ],
      release_date: "2022-06-30",
      revenue: 0,
      runtime: 107,
      spoken_languages: [
        {
          english_name: "English",
          iso_639_1: "en",
          name: "English",
        },
      ],
      status: "Released",
      tagline: "The birth of boxing.",
      title: "Prizefighter: The Life of Jem Belcher",
      video: false,
      vote_average: 7.202,
      vote_count: 57,
      credits: {
        cast: [
          {
            adult: false,
            gender: 2,
            id: 1075104,
            known_for_department: "Acting",
            name: "Matt Hookings",
            original_name: "Matt Hookings",
            popularity: 3.591,
            profile_path: "/iPmO808tQE0Pm52vQFhevRGZIEn.jpg",
            cast_id: 3,
            character: "Jem Belcher",
            credit_id: "621a1ea1f1b571001b468951",
            order: 0,
          },
          {
            adult: false,
            gender: 2,
            id: 5538,
            known_for_department: "Acting",
            name: "Ray Winstone",
            original_name: "Ray Winstone",
            popularity: 18.016,
            profile_path: "/kDShEv6zPfArgcwXliGWKR65Mmo.jpg",
            cast_id: 4,
            character: "Bill Warr",
            credit_id: "621a1eb4afa1b0001e28a8b8",
            order: 1,
          },
          {
            adult: false,
            gender: 1,
            id: 57449,
            known_for_department: "Acting",
            name: "Jodhi May",
            original_name: "Jodhi May",
            popularity: 14.001,
            profile_path: "/iqVk4bZyBkIOOWxaYxiezcApwRG.jpg",
            cast_id: 5,
            character: "Mary Belcher",
            credit_id: "621a1eca0e597b00412cd117",
            order: 2,
          },
          {
            adult: false,
            gender: 2,
            id: 20982,
            known_for_department: "Acting",
            name: "Marton Csokas",
            original_name: "Marton Csokas",
            popularity: 13.592,
            profile_path: "/jKtjjwf8MHnUsQ3YA56LH9pJjee.jpg",
            cast_id: 6,
            character: "Lord Rushworth",
            credit_id: "62acb2592f79150061fa7fd7",
            order: 3,
          },
          {
            adult: false,
            gender: 2,
            id: 934,
            known_for_department: "Acting",
            name: "Russell Crowe",
            original_name: "Russell Crowe",
            popularity: 44.066,
            profile_path: "/fbzD4utSGJlsV8XbYMLoMdEZ1Fc.jpg",
            cast_id: 7,
            character: "Jack Slack",
            credit_id: "62acb26d4a4bfc006172985e",
            order: 4,
          },
          {
            adult: false,
            gender: 2,
            id: 782,
            known_for_department: "Acting",
            name: "Steven Berkoff",
            original_name: "Steven Berkoff",
            popularity: 8.999,
            profile_path: "/v15QPmGSTM5PGGZIhZd1KweFK5E.jpg",
            cast_id: 9,
            character: "Walter",
            credit_id: "62acb36c396e970091ac82cf",
            order: 5,
          },
          {
            adult: false,
            gender: 2,
            id: 740,
            known_for_department: "Acting",
            name: "Julian Glover",
            original_name: "Julian Glover",
            popularity: 11.736,
            profile_path: "/yqFGLoY6CRy9jGp3NI328VlsaIG.jpg",
            cast_id: 8,
            character: "Lord Ashford",
            credit_id: "62acb35e23d278009216a262",
            order: 6,
          },
        ],
        crew: [
          {
            adult: false,
            gender: 2,
            id: 2070,
            known_for_department: "Editing",
            name: "Chris Gill",
            original_name: "Chris Gill",
            popularity: 1.4,
            profile_path: null,
            credit_id: "63db0bc5a6c1040093cf1e29",
            department: "Editing",
            job: "Editor",
          },
          {
            adult: false,
            gender: 1,
            id: 25729,
            known_for_department: "Production",
            name: "Nancy Bishop",
            original_name: "Nancy Bishop",
            popularity: 1.434,
            profile_path: "/lKCqfXuWuQKIqsxnK6ZNXh7v1Ev.jpg",
            credit_id: "63db0be8955c6500a0ed1571",
            department: "Production",
            job: "Casting",
          },
          {
            adult: false,
            gender: 2,
            id: 1075104,
            known_for_department: "Acting",
            name: "Matt Hookings",
            original_name: "Matt Hookings",
            popularity: 3.591,
            profile_path: "/iPmO808tQE0Pm52vQFhevRGZIEn.jpg",
            credit_id: "621a1e7fa88587001bf33847",
            department: "Writing",
            job: "Writer",
          },
          {
            adult: false,
            gender: 0,
            id: 1752050,
            known_for_department: "Editing",
            name: "Jeff Cummings",
            original_name: "Jeff Cummings",
            popularity: 0.6,
            profile_path: null,
            credit_id: "63db0bbf3dc313008233f147",
            department: "Editing",
            job: "Editor",
          },
          {
            adult: false,
            gender: 2,
            id: 1827463,
            known_for_department: "Directing",
            name: "Daniel Graham",
            original_name: "Daniel Graham",
            popularity: 1.943,
            profile_path: null,
            credit_id: "621a1e7192e55b006c299d94",
            department: "Directing",
            job: "Director",
          },
          {
            adult: false,
            gender: 2,
            id: 2307079,
            known_for_department: "Camera",
            name: "Ben Braham Ziryab",
            original_name: "Ben Braham Ziryab",
            popularity: 0.6,
            profile_path: null,
            credit_id: "63db0ad63dc313009df219da",
            department: "Camera",
            job: "Director of Photography",
          },
        ],
      },
      videos: {
        results: [
          {
            iso_639_1: "en",
            iso_3166_1: "US",
            name: "Prizefighter | 2022 | Movie Clip | Russell Crowe Boxing",
            key: "0MoEDlOstC0",
            site: "YouTube",
            size: 1080,
            type: "Clip",
            official: true,
            published_at: "2022-07-11T12:00:00.000Z",
            id: "62cc31ce87a27a004f0e1a17",
          },
          {
            iso_639_1: "en",
            iso_3166_1: "US",
            name: "UK Trailer",
            key: "DSh3j_PtMMw",
            site: "YouTube",
            size: 1080,
            type: "Trailer",
            official: true,
            published_at: "2022-06-17T16:04:55.000Z",
            id: "62acac1fe92d830094607d9c",
          },
        ],
      },
    },
  ];

  //https://api.themoviedb.org/3/movie/943822?api_key={CastURL}&append_to_response=credits

  // useEffect(() => {
  //   const movieUrl = `${moviesURL}${id}?${API_KEY}&language=en-US`;
  //   getMovie(movieUrl);
  // }, []);

  // useEffect(() => {
  //   const movieUrl = `${moviesURL}${id}/credits?${CastURL}&language=en-US`;
  //   getMovie(movieUrl);
  // }, []);

  //api_key=8ed200f50a6942ca5bc8b5cdec27ff22 Cast
  //https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
  //https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US

  return (
    <Container>
      {test.map((movie) => (
        <>
          <Background>
            <img
              alt={movie.original_title}
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            />
          </Background>

          <Content>
            <ContentMeta>
              <ImageCapa>
                <img
                  alt={movie.original_title}
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                />
              </ImageCapa>
              <Controls>
                <Texts>
                  <Div>
                    <h1>{movie.original_title}</h1>
                    <Span>
                      {movie.genres.map((genre) => (
                        <SubTitle key={genre.id}>
                          <span>{genre.name}</span>
                        </SubTitle>
                      ))}
                    </Span>

                    <SubSpan>
                      <span>{movie.runtime} min</span>
                      <span>{movie.release_date}</span>
                      <span>{movie.vote_average.toFixed(1)}</span>
                    </SubSpan>

                    <Description>
                      <p>{movie.overview}</p>
                    </Description>
                    <Trailer>
                      <a href="#videos">
                        <img src={PlayIcon} alt="" />
                        <span>Trailer</span>
                      </a>
                    </Trailer>
                  </Div>
                </Texts>
              </Controls>
            </ContentMeta>

            <div>
              <Title>
                <h1>Cast</h1>
              </Title>

              <CastList>
                <ContainerWrap>
                  {movie.credits.cast.map((person) => (
                    <Wrap key={person.name}>
                      <Link to="">
                        <img
                          src={`https://image.tmdb.org/t/p/original${person.profile_path}`}
                          alt={person.name}
                        />
                        <DetailsCast>
                          <CastsContent>
                            <p>{person.name}</p>
                          </CastsContent>
                        </DetailsCast>
                      </Link>
                    </Wrap>
                  ))}
                </ContainerWrap>
              </CastList>
            </div>

            <div id="videos">
              <Title>
                <h1>Videos</h1>
              </Title>

              <VideosIfr>
                {movie.videos.results.map((vd) => (
                  <div>
                    <iframe
                      src={`https://www.youtube.com/embed/${vd.key}?controls=0`}
                      // width="700"
                      // height="409"
                      frameborder="0"
                    ></iframe>
                  </div>
                ))}
              </VideosIfr>
            </div>
          </Content>
        </>
      ))}
    </Container>
  );
};

const VideosIfr = styled.div`
  display: flex;
  gap: 5px;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;

  & > div > iframe {
    width: 550px;
    height: 400px;
  }

  @media (max-width: 720px) {
    & > div > iframe {
      width: 300px;
      height: 250px;
    }
  }
`;

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 60px;
  padding: 0 calc(3.5vw + 5px);
  margin-bottom: 3rem;
  background-color: rgb(0, 0, 0, 40%);
`;

const Background = styled.div`
  left: 0px;
  opacity: 0.8;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;

  img {
    width: 100vw;
    height: 100vh;
    @media (max-width: 880px) {
      object-fit: cover;
    }
  }
`;

const ImageCapa = styled.div`
  width: 40%;
  margin: 0 2rem 0 0;

  img {
    //max-width: 600px;
    width: 100%;
    //height: 500px;
  }

  @media (max-width: 899px) {
    width: 50%;
  }

  @media (max-width: 599px) {
    width: 70%;
    margin: 0 auto 2rem;
  }
`;

const ContentMeta = styled.div`
  display: flex;

  @media (max-width: 899px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Controls = styled.div`
  width: 60%;

  @media (max-width: 899px) {
    width: 100%;
    margin-top: -40px;
  }
`;

const Trailer = styled.button`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background-color: rgb(255, 0, 0);
  border: none;
  color: rgb(249, 249, 249);
  font-weight: bold;
  width: 30%;

  & > a > img {
    width: 32px;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    background-color: #c1121f;
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;
    a > img {
      width: 25px;
    }
  }
`;

const Content = styled.div`
  max-width: 1366px;
  margin: auto;
  padding: 16px 10px;
  margin-top: 20px;
`;

const Texts = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  margin: 40px 0px 0px;

  & > h1 {
    font-size: 3rem;
    margin: 0;
    margin-bottom: 10px;

    @media (max-width: 1029px) {
      font-size: 2rem;
    }
  }
`;

const SubTitle = styled.div`
  max-width: 100%;
  font-size: 0.8125rem;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  height: 32px;
  color: rgb(255, 255, 255);
  background-color: rgb(255, 0, 0);
  border-radius: 16px;
  white-space: nowrap;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  cursor: default;
  outline: 0px;
  text-decoration: none;
  border: 0px;
  padding: 0px;
  vertical-align: middle;
  box-sizing: border-box;
  margin: 0px 0px 0px 10px;
  transition: all 0.3s;

  &:hover {
    background-color: #c1121f;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Span = styled.div`
  display: flex;
  margin-bottom: 1.3rem;

  & > div > span {
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left: 12px;
    padding-right: 12px;
    white-space: nowrap;
  }
`;

const SubSpan = styled.div`
  display: flex;
  gap: 1rem;

  & > span {
    font-weight: bold;
    padding: 5px;
    border: none;
    border-radius: 5px;
    background-color: #a2d2ff;
    color: black;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Title = styled.div`
  position: relative;
  max-width: 1366px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  & > h1 {
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

const ContainerWrap = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  gap: 0.3rem;
  align-items: center;
  position: relative;

  @media (max-width: 820px) {
    justify-content: center;
  }
`;

const CastList = styled.div`
  max-width: 1366px;
  //margin: auto;
  //padding: 16px;
  padding-right: 0;
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: grab;
  position: relative;
  border: 2px solid rgba(249, 249, 249, 0.1);
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  width: 170px;
  //height: 300px;
  gap: 1rem;

  & > a {
    max-width: 1150px;
    //max-height: 225px;
    border-radius: 4px;

    cursor: grab;
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

const DetailsCast = styled.div`
  transition: all 0.3s ease 0s;
  position: absolute;
  width: 100%;
  height: max-content;
  box-sizing: border-box;
  opacity: 1;
  bottom: 0px;
  padding: 10px;
  background-color: rgb(0, 0, 0, 40%);
  font-weight: 700;

  @media (max-width: 768px) {
    //display: none;
    & > div > p {
      font-size: 13px;
    }
  }

  @media (max-width: 500px) {
    //display: none;
    & > div > p {
      font-size: 10px;
    }
  }
`;

const CastsContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Detail;
