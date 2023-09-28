import styled from 'styled-components';

const MovieContainer = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 20px;
`;

const SpanTag = styled.span`
    padding: 2px 6px;
    border: 1px solid #90a4ae;
    border-radius: 4px;
    margin-right: 5px;
    `;

const MovieList =styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;

`;

const MovieTitle = styled.h2`
  font-size: 32px;
  margin: 0;
  margin-bottom: 10px;
  `;

const MovieSubTitle = styled.h2`
  font-size: 24px;
  margin: 0;
  margin-bottom: 10px;
  `;


export { MovieContainer, SpanTag, MovieList, MovieTitle, MovieSubTitle };
