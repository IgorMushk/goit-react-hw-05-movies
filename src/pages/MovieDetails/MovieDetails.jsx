import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { fetchMovies } from 'services/moviesAPI';

const MovieDetails = () => {
  const { id } = useParams();
  const [dataMovie, setDataMovie] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const backLocation = location.state?.from ?? '/movies';
  //console.log('MovieDetails >>>',location);

  useEffect(() => {
    fetchMovies(`/movie/${id}`)
      .then(data => {
        setDataMovie(data);
        console.log('(data >>', data.title);
        console.log('(dataMovie >>', dataMovie);
      })
      .catch(err => console.log(err));
  }, [id]);

  const handleBackClick = () => {
    navigate(backLocation);
  };

  // console.log(dataMovie);
  // const {title, poster_path} = dataMovie;
  //<p>${dataMovie.title}</p>
  //<p>${dataMovie.poster_path}</p>

    return (
    <>
      <button to={backLocation} onClick={handleBackClick}>
        Back to movies
      </button>

      <div>
        <div>
          {dataMovie ? (
            <>
              <img
                src={`https://image.tmdb.org/t/p/w300${dataMovie.poster_path}`}
                alt={`poster of ${dataMovie.title} movie`}
              ></img>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default MovieDetails;

// useEffect(() => {
//     const fetchMovieDetailes = async () => {
//       try {
//         const data = await fetchMovies(`/movie/${id}`);
//         setDataMovie(data);
//         console.log('(dataMovie >>',dataMovie);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchMovieDetailes();
//   }, [id]);
