import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import PlayIcon from "../img/play-icon.png";
import { Link } from "react-router-dom";

import You from "../img/you-serie.jpg";
import Prety from "../assests/ex-detales.jpg";

const API_KEY = "api_key=193f93bed7f6ce72c0ffcc407532ed98";
const CastURL = "api_key=8ed200f50a6942ca5bc8b5cdec27ff22";
const serieURL = "https://api.themoviedb.org/3/movie/";

const DetailSerie = () => {
  const getSerie = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/tv/70785?${CastURL}&append_to_response=credits,videos`
    );
    const data = await res.json();
    console.log(data);
    // setMovie(data);
  };

  //getSerie()

  const an = [
    {
      adult: false,
      backdrop_path: "/70YdbMELM4b8x8VXjlubymb2bQ0.jpg",
      created_by: [
        {
          id: 1223198,
          credit_id: "58e43eb492514127f6026873",
          name: "Moira Walley-Beckett",
          gender: 1,
          profile_path: "/nysIQz4lEMqar1Bd3gBaCzuwSde.jpg",
        },
      ],
      episode_run_time: [47],
      first_air_date: "2017-03-19",
      genres: [
        {
          id: 18,
          name: "Drama",
        },
        {
          id: 10751,
          name: "Family",
        },
      ],
      homepage: "http://www.cbc.ca/anne/",
      id: 70785,
      in_production: false,
      languages: ["en"],
      last_air_date: "2019-11-24",
      last_episode_to_air: {
        id: 1985358,
        name: "The Better Feeling of My Heart",
        overview:
          "As the students prepare to depart for Queen’s College, Gilbert takes a final chance. Marilla intervenes on Diana’s behalf. Anne embraces her future but finds that change also brings loss. Elijah returns to Avonlea. Anne has a fateful encounter in Charlottetown. Series finale.",
        vote_average: 8.2,
        vote_count: 8,
        air_date: "2019-11-24",
        episode_number: 10,
        production_code: "",
        runtime: 45,
        season_number: 3,
        show_id: 70785,
        still_path: "/vD9TdKbzOZTFbqrlEu2JZZVtvDD.jpg",
      },
      name: "Anne with an E",
      next_episode_to_air: null,
      networks: [
        {
          id: 23,
          logo_path: "/cw5WW6cc9UANam4A6o1BDua9njN.png",
          name: "CBC Television",
          origin_country: "CA",
        },
      ],
      number_of_episodes: 27,
      number_of_seasons: 3,
      origin_country: ["CA"],
      original_language: "en",
      original_name: "Anne with an E",
      overview:
        "A coming-of-age story about an outsider who, against all odds and numerous challenges, fights for love and acceptance and for her place in the world. The series centers on a young orphaned girl in the late 1890’s, who, after an abusive childhood spent in orphanages and the homes of strangers, is mistakenly sent to live with an elderly woman and her aging brother. Over time, 13-year-old Anne will transform their lives and eventually the small town in which they live with her unique spirit, fierce intellect and brilliant imagination.",
      popularity: 96.467,
      poster_path: "/6P6tXhjT5tK3qOXzxF9OMLlG7iz.jpg",
      production_companies: [
        {
          id: 88009,
          logo_path: null,
          name: "Northwood Entertainment",
          origin_country: "",
        },
        {
          id: 152825,
          logo_path: null,
          name: "Northwood Pictures",
          origin_country: "",
        },
      ],
      production_countries: [
        {
          iso_3166_1: "CA",
          name: "Canada",
        },
      ],
      seasons: [
        {
          air_date: "2017-03-19",
          episode_count: 7,
          id: 86320,
          name: "Season 1",
          overview:
            "A young orphan's arrival in Avonlea affects the hearts and minds of everyone she meets, beginning with the pair of aging siblings who take her in.",
          poster_path: "/lqoGVD3FCahM9faB2SWdpae9Ejt.jpg",
          season_number: 1,
        },
        {
          air_date: "2018-07-06",
          episode_count: 10,
          id: 104920,
          name: "Season 2",
          overview:
            "Anne's beloved world of Green Gables becomes a much bigger place, with new faces and heartfelt lessons about love, loss and growing up.",
          poster_path: "/7bjv63bF07F2SiN6PoJHYqmYRoR.jpg",
          season_number: 2,
        },
        {
          air_date: "2019-09-22",
          episode_count: 10,
          id: 131544,
          name: "Season 3",
          overview: "",
          poster_path: "/hSjv6QkGknuJrB8LTjYFv5SPjrr.jpg",
          season_number: 3,
        },
      ],
      spoken_languages: [
        {
          english_name: "English",
          iso_639_1: "en",
          name: "English",
        },
      ],
      status: "Canceled",
      tagline: "Welcome back to Green Gables.",
      type: "Scripted",
      vote_average: 8.706,
      vote_count: 4225,
      credits: {
        cast: [
          {
            adult: false,
            gender: 1,
            id: 1780007,
            known_for_department: "Acting",
            name: "Amybeth McNulty",
            original_name: "Amybeth McNulty",
            popularity: 13.575,
            profile_path: "/ypkqSiS3u36Ki4KZwvRR3kbZ1IW.jpg",
            character: "Anne Shirley",
            credit_id: "58ced80f9251415a45027327",
            order: 0,
          },
          {
            adult: false,
            gender: 1,
            id: 11855,
            known_for_department: "Acting",
            name: "Geraldine James",
            original_name: "Geraldine James",
            popularity: 14.404,
            profile_path: "/mKtJaRvLMzjwg8lyYEMxdGRmOiz.jpg",
            character: "Marilla Cuthbert",
            credit_id: "58d885e19251411f9006336e",
            order: 1,
          },
          {
            adult: false,
            gender: 2,
            id: 91600,
            known_for_department: "Acting",
            name: "R. H. Thomson",
            original_name: "R. H. Thomson",
            popularity: 11.943,
            profile_path: "/j9RIw8mC5CpMRToDfUCzFgPGDhK.jpg",
            character: "Matthew Cuthbert",
            credit_id: "58d885fcc3a36812670599ea",
            order: 2,
          },
          {
            adult: false,
            gender: 2,
            id: 1485770,
            known_for_department: "Acting",
            name: "Lucas Jade Zumann",
            original_name: "Lucas Jade Zumann",
            popularity: 17.19,
            profile_path: "/7ocQJdexgzKx4Yqk0qs9fChIniV.jpg",
            character: "Gilbert Blythe",
            credit_id: "58d88658c3a368128906300f",
            order: 5,
          },
          {
            adult: false,
            gender: 1,
            id: 2718335,
            known_for_department: "Acting",
            name: "Kiawentiio",
            original_name: "Kiawentiio",
            popularity: 3.249,
            profile_path: "/zxYR9GZQ9H8cMOgoopBUtb8zrfi.jpg",
            character: "Ka'kwet",
            credit_id: "63b873b543250f0082e96d16",
            order: 7,
          },
        ],
        crew: [
          {
            adult: false,
            gender: 1,
            id: 1223198,
            known_for_department: "Writing",
            name: "Moira Walley-Beckett",
            original_name: "Moira Walley-Beckett",
            popularity: 2.093,
            profile_path: "/1sRNcxMZVsVcY6NFNQzASJuR8By.jpg",
            credit_id: "5ca76c920e0a266cf733bfb9",
            department: "Production",
            job: "Executive Producer",
          },
          {
            adult: false,
            gender: 1,
            id: 236605,
            known_for_department: "Production",
            name: "Miranda de Pencier",
            original_name: "Miranda de Pencier",
            popularity: 0.732,
            profile_path: "/78Nuks6NhRFpnmAyetAHqElFNKz.jpg",
            credit_id: "5ca76c7e0e0a261f4133e9de",
            department: "Production",
            job: "Executive Producer",
          },
        ],
      },
      videos: {
        results: [
          {
            iso_639_1: "en",
            iso_3166_1: "US",
            name: "loose adaptation",
            key: "S5qJXYNNINo",
            published_at: "2017-04-04T16:00:02.000Z",
            site: "YouTube",
            size: 360,
            type: "Clip",
            official: true,
            id: "5b1a9316c3a36848fb012c38",
          },
        ],
      },
    },
  ];

  return (
    <Container>
      {an.map((movie) => (
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
                  alt={movie.original_name}
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                />
              </ImageCapa>
              <Controls>
                <Texts>
                  <Div>
                    <h1>{movie.original_name}</h1>
                    <Span>
                      {movie.genres.map((genre) => (
                        <SubTitle key={genre.id}>
                          <span>{genre.name}</span>
                        </SubTitle>
                      ))}
                    </Span>

                    <SubSpan>
                      <span>Seasons {movie.number_of_seasons}</span>
                      <span>{movie.last_episode_to_air.runtime} min</span>
                      <span>{movie.first_air_date}</span>
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

export default DetailSerie;
