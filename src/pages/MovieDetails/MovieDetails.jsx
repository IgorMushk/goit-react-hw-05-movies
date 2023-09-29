import { Suspense, useEffect, useState } from 'react';
import { useLocation, useParams, Link, Outlet } from 'react-router-dom';
import { fetchMovies } from 'services/moviesAPI';
import {
  AddInfList,
  AddInfWrapper,
  AdditionalTitle,
  MovieContainer,
  MovieImg,
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
  
  const backLocation = location.state?.from ?? '/movies';
  //console.log('MovieDetails >>>',location);

  useEffect(() => {
    fetchMovies(`/movie/${id}`)
      .then(data => {
        setDataMovie(data);
        //console.log('(data >>', data.title);
        //console.log('(dataMovie >>', dataMovie);
      })
      .catch(err => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

 
  return (
    <>
      <StyledLink to={backLocation}>
        <span>&#60;</span> Go back
      </StyledLink>

      <div>
        <div>
          {dataMovie ? (
            <>
              <MovieContainer>
                <MovieImg
                  src={`https://image.tmdb.org/t/p/w300${dataMovie.poster_path}`}
                  alt={`poster of ${dataMovie.title} movie`}
                ></MovieImg>
                <div>
                  <MovieTitle>{dataMovie.title}</MovieTitle>
                  <MovieList>
                    <li>
                      <span>
                        User score:{' '}
                        {`${Math.ceil(dataMovie.vote_average * 10)}%`}
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
              <AddInfWrapper>
                {/* <hr></hr> */}
                <AdditionalTitle>Additional information</AdditionalTitle>
                <AddInfList>
                  <li>
                    <Link to="cast" state={location.state}>
                      Cast
                    </Link>
                  </li>
                  <li>
                    <Link to="reviews" state={location.state}>
                      Reviews
                    </Link>
                  </li>
                </AddInfList>
                {/* <hr></hr> */}
              </AddInfWrapper>
              <Suspense fallback={<div>Loading subpage...</div>}>
                <Outlet />
              </Suspense>
            </>
          ) : (     
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
