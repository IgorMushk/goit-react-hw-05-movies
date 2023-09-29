import styled from 'styled-components';

const Title = styled.h2`
  margin-left: 15px;
  font-size: 24px;
  font-weight: 700;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;

  & a:hover {
    color: #ff6d00;
  }
`;
export { Title, List };
