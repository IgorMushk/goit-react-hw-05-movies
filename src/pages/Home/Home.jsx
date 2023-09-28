import MoviesList from 'components/MoviesList/MoviesList';
import React, { useEffect, useState } from 'react';
import { fetchMovies } from 'services/moviesAPI';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  //const [loading, setLoading] = useState(false);

  useEffect(() => {
    //setLoading(true);
    const fetchTrendingMovies = async () => {
        try {
            const data = await fetchMovies('/trending//movie/day?language=en-US');
            setTrendingMovies(data.results);
        } catch (err) {
            console.log(err)
        };
    }
    fetchTrendingMovies();
  }, []);
  return <MoviesList movies={trendingMovies} />;;
};

export default Home;

// useEffect(() => {
//     //setLoading(true);
//     fetchMovies('/trending//movie/day?language=en-US')
//       .then(data => {
//         settrendingMovies(data.results);
//         //setLoading(false);
//       })
//       .catch(err => console.log(err));
//   }, []);



// return (
//     <>
//     <div>Home</div>
//      {/* {loading && <Loader />} */}
//      <h1>Trending today</h1>
//      <ul>
//         {trendingMovies.map(movie => (
//             <li key={movie.id}> {movie.title}</li>
//             ))}
//      </ul>
//     </>
//   );