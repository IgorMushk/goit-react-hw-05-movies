import MoviesList from 'components/MoviesList/MoviesList';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovies } from 'services/moviesAPI';
import { ButtonSubmit, FormInput, FormWrapper } from './Movies.styled';

const Movies = () => {
  const [inputValue, setInputValue] = useState([]);
  const [dataMovies, setDataMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  //console.log('query >>', query);

  useEffect(() => {
    if (query) {
      setInputValue(query);
      searchMovies(query);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const searchMovies = async query => {
    try {
      const data = await fetchMovies(`/search/movie?query=${query}`);
      setDataMovies(data.results);
      //console.log('data >>', data.results);
      //console.log('dataMovies >>', dataMovies);
    } catch (err) {
      console.log(err);
    }
  };

  const handleInputChange = evt => {
    //console.log(evt.target.value);
    setInputValue(evt.target.value);
  };

  const handleSearchClick = evt => {
    evt.preventDefault();
    //console.log('handleSearchClick >>', inputValue);
    if (!inputValue) {
      setSearchParams({});
      setDataMovies([]);
      return;
    }
    setSearchParams({ query: inputValue });
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSearchClick}>
        <FormInput
          type="text"
          placeholder="Search"
          value={inputValue}
          onChange={handleInputChange}
        />
        <ButtonSubmit type="submit">
          Search
        </ButtonSubmit>
      </form>
    <MoviesList movies={dataMovies}/>
    </FormWrapper>
  );
};

export default Movies;
