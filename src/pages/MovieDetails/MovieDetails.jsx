import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { fetchMovies } from 'services/moviesAPI';

const MovieDetails = () => {
  const [dataMovie, setDataMovie] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const backLinkHref = location.state?.from ?? '/movies';
  //console.log('MovieDetails >>>',location);

  const handleBackClick = () => {
    navigate(backLinkHref);
  };

  useEffect(() => {
    //setLoading(true);
    const fetchMovieDetailes = async () => {
      try {
        const data = await fetchMovies(`/movie/${id}`);
        setDataMovie(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMovieDetailes();
  }, [id]);

  console.log(dataMovie);

  return (
    <>
      <button to={backLinkHref} onClick={handleBackClick}>
        Back to movies
      </button>
      <div>MovieDetails</div>
    </>
  );
};

export default MovieDetails;
