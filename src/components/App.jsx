import Home from 'pages/Home/Home';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Movies from 'pages/Movies/Movies';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import Cast from './Cast/Cast';
import Review from './Review/Review';
import styled from 'styled-components';
import { Container, Header, Nav } from './App.styled';

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #bdbdbd;
  font-weight: 600;

  &:hover {
    color: #eeeeee;
  }

  &.active {
    color: #ffc107;
  }
`;

export const App = () => {
  return (
    <div>
      <Header>
        <Container>
          <Nav>
            <Link to="/">
              <img
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                alt="The Movie Database (TMDB)"
                width="154"
                height="20"
              ></img>
            </Link>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/movies">Movies</StyledLink>
          </Nav>
        </Container>
      </Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Review />} />
        </Route>
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </div>
  );
};
