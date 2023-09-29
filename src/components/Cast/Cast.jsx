import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchMovies } from 'services/moviesAPI';
import { CastImg, CastList } from './Cast.styled';

const Cast = () => {
  const{id} = useParams();
  const[cast, setCast]  = useState([]);
  //console.log(id)

  useEffect(() => {
    fetchMovies(`/movie/${id}/credits`)
      .then(data => {
        setCast(data.cast);
        //console.log('(data >>', data);
        //console.log('(cast >>', cast);
      })
      .catch(err => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
      
    <CastList> 
      {cast.map(item => {
        return (
          <li key={item.id}>
              <CastImg
                src= {
                  item.profile_path
                   ? `https://image.tmdb.org/t/p/w200/${item.profile_path}`
                   : 'https://fakeimg.pl/200x300/032541/000?text=No%20Photo'
                }
                alt={`foto of ${item.name}`}
              />
            <p><b>{item.name}</b></p>
            <p>{item.character}</p>
          </li>
        );
      })}
    </CastList>

  )
}

export default Cast
