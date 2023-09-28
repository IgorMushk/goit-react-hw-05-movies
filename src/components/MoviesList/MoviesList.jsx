import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { List, Title, } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation;
  console.log(location);
  return  (
    <>
     <Title>Trending today</Title>
     <List>
        {movies.map(({id, title}) => (
            <li key={id}>
               <Link to={`/movies/${id}`} state={{ from:location}}>
                  {title}
                </Link>
             </li>
            ))}
     </List>
    </>
    )
};

export default MoviesList;
