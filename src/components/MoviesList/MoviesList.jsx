import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { List, } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  //console.log(location);
  //console.log('MoviesList - movies >>>', movies);

  return  (
    <>
     <List>
        {movies.map(movie => (
            <li key={movie.id}>
               <Link to={`/movies/${movie.id}`} state={{ from:location}}>
                  {movie.title}
                </Link>
             </li>
            ))}
     </List>
    </>
    )
};

export default MoviesList;
