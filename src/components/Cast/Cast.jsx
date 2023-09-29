import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchMovies } from 'services/moviesAPI';

const Cast = () => {
  const{id} = useParams();
  const[cast, setCast]  = useState([]);
  //console.log(id)

  useEffect(() => {
    fetchMovies(`/movie/${id}/credits`)
      .then(data => {
        setCast(data.cast);
        console.log('(data >>', data);
        console.log('(cast >>', cast);
      })
      .catch(err => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
      
    <ul> 
      {cast.map(item => {
        return (
          <li key={item.id}>
            {item.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200/${item.profile_path}`}
                alt=""
              />
            ) : (
              <p>No photos of {item.name}</p>
            )}
            <p>{item.name}</p>
            <p>{item.character}</p>
          </li>
        );
      })}
    </ul>

  )
}

export default Cast
// <div>Cast</div>
// cast &&  <div>Cast -!!!!</div>