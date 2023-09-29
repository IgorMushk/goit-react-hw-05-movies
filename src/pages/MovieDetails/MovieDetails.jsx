import { useEffect, useState } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import { fetchMovies } from 'services/moviesAPI';
import {
  MovieContainer,
  MovieList,
  MovieSubTitle,
  MovieTitle,
  SpanTag,
} from './MovieDetaile.styled';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  margin-top: 20px;
  margin-left: 10px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  color: #032541;
  border: 1px solid #032541;
  border-radius: 4px;
  padding: 8px 0px;
  transition: all 250ms linear;
  

  &:hover {
    color: white;
    background-color: #032541;
  }
`;

const MovieDetails = () => {
  const { id } = useParams();
  const [dataMovie, setDataMovie] = useState(null);
  const location = useLocation();
  //const navigate = useNavigate();

  const backLocation = location.state?.from ?? '/movies';
  //console.log('MovieDetails >>>',location);

  useEffect(() => {
    fetchMovies(`/movie/${id}`)
      .then(data => {
        setDataMovie(data);
        console.log('(data >>', data.title);
        console.log('(dataMovie >>', dataMovie);
      })
      .catch(err => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  //   const handleBackClick = () => {
  //     navigate(backLocation);
  //   };

  // console.log(dataMovie);
  // const {title, poster_path} = dataMovie;
  //<p>${dataMovie.title}</p>
  //<p>${dataMovie.poster_path}</p>

  return (
    <>
      {/* <button to={backLocation} onClick={handleBackClick}>
      <span>&#60;</span> Go back
      </button> */}
      <StyledLink to={backLocation}>
        <span>&#60;</span> Go back
      </StyledLink>

      <div>
        <div>
          {dataMovie ? (
            <MovieContainer>
              <img
                src={`https://image.tmdb.org/t/p/w300${dataMovie.poster_path}`}
                alt={`poster of ${dataMovie.title} movie`}
              ></img>
              <div>
                <MovieTitle>{dataMovie.title}</MovieTitle>
                <MovieList>
                  <li>
                    <span>
                      User score: {`${Math.ceil(dataMovie.vote_average * 10)}%`}
                    </span>
                  </li>
                  <li>
                    <MovieSubTitle>Overview:</MovieSubTitle>
                  </li>
                  <li>
                    <p> {dataMovie.overview} </p>
                  </li>
                  <li>
                    <MovieSubTitle>Genres:</MovieSubTitle>
                  </li>
                  <li>
                    {dataMovie.genres.map(({ name }) => (
                      <SpanTag key={name}> {name} </SpanTag>
                    ))}
                  </li>
                </MovieList>
              </div>
            </MovieContainer>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default MovieDetails;

// useEffect(() => {
//     const fetchMovieDetailes = async () => {
//       try {
//         const data = await fetchMovies(`/movie/${id}`);
//         setDataMovie(data);
//         console.log('(dataMovie >>',dataMovie);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchMovieDetailes();
//   }, [id]);
