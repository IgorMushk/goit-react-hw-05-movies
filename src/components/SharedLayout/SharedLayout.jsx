import { Container, Header, Nav } from 'components/App.styled';
import React, { Suspense } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

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

const SharedLayout = () => {
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
      <main>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default SharedLayout;
