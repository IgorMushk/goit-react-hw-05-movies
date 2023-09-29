import styled from 'styled-components';

const CastList = styled.ul`
  margin-left: 10px;
  display: flex;
  gap: 20px;
  padding: 0;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
  & li {
    max-width: 200px;
  }
  & p {
    text-align: center;
    word-wrap: break-word;
    margin: 5px 0px;
  }
`;

const CastImg = styled.img`
border-radius: 4px;
box-shadow: 0 2px 4px 1px rgba(0, 0, 0, 0.25);
`;

export {CastList,CastImg,};