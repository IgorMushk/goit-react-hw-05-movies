import React, { useEffect, useState } from 'react';
import { fetchMovies } from 'services/moviesAPI';

const Home = () => {
  const [trendingMovies, settrendingMovies] = useState([]);
  //const [loading, setLoading] = useState(false);

  useEffect(() => {
    //setLoading(true);
    fetchMovies('/trending//movie/day?language=en-US')
      .then(data => {
        settrendingMovies(data.results);
        //setLoading(false);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <>
    <div>Home</div>
     {/* {loading && <Loader />} */}
     <h1>Trending today</h1>
     <ul>
        {trendingMovies.map(movie => (
            <li key={movie.id}> {movie.title}</li>
            ))}
     </ul>
    </>
  );
};

export default Home;
