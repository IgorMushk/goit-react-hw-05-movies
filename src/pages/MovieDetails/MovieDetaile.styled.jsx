import styled from 'styled-components';

const MovieContainer = styled.div`
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 15px;
  display: flex;
  gap: 20px;
`;

const SpanTag = styled.span`
  padding: 2px 6px;
  border: 1px solid #90a4ae;
  border-radius: 4px;
  margin-right: 5px;
`;

const MovieList = styled.ul`
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

const AdditionalTitle = styled.p`
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 15px;
`;

const AddInfWrapper = styled.div`
  margin-top: 5px;
  padding-top: 5px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(144, 164, 174, 0.3);
  border-top: 1px solid rgba(144, 164, 174, 0.3);
`;

const MovieImg = styled.img`
border-radius: 4px;
box-shadow: 0 2px 4px 1px rgba(0, 0, 0, 0.25);
`;

const AddInfList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-start;;
  align-items: center;
  gap: 10px;
  text-transform: uppercase;
  margin-top: 10px;
  margin-bottom: 5px;

  & a:hover {
    color: #ff6d00;
`;


export {
  MovieContainer,
  SpanTag,
  MovieList,
  MovieTitle,
  MovieSubTitle,
  AdditionalTitle,
  AddInfWrapper,
  AddInfList,
  MovieImg,
};
