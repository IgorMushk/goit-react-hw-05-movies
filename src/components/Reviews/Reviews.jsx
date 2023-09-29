import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchMovies } from 'services/moviesAPI';

const Reviews = () => {
  const {id} = useParams();
  const [reviews,setReviws] = useState([]);
  //console.log(id)

  useEffect(() => {
    fetchMovies(`/movie/${id}/reviews`)
      .then(data => {
        setReviws(data.results);
        //console.log('(data >>', data);
        //console.log('(reviees >>', reviews);
      })
      .catch(err => console.log(err));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
   <ul>
    {reviews.length !==0 
    ? (
      reviews.map(item =>{
        return (
          <li key={item.id}>
            <p><b>{item.author}</b></p>
            <p><i>{item.content}</i></p>
          </li>
        )
      })
    )
    : (<div><b>We don't have any reviews for this movie</b></div>)
    }
   </ul> 
  )
}

export default Reviews
