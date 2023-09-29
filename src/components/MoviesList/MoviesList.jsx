import React from 'react';
import { Link, useLocation } from 'react-router-dom';
//import { List, Title, } from './MoviesList.styled';
import { List, } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  //console.log(location);
  console.log('MoviesList - movies >>>', movies);

  return  (
    <>
     {/* <Title>Trending today</Title> */}
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
