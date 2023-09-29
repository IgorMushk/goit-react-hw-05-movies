import MoviesList from 'components/MoviesList/MoviesList';
import { Title } from 'components/MoviesList/MoviesList.styled';
import React, { useEffect, useState } from 'react';
import { fetchMovies } from 'services/moviesAPI';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  
  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const data = await fetchMovies('/trending/movie/day?language=en-US');
        setTrendingMovies(data.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTrendingMovies();
  }, []);
  return (
    <>
      <Title>Trending today</Title>
      <MoviesList movies={trendingMovies} />
    </>
  );
};

export default Home;
