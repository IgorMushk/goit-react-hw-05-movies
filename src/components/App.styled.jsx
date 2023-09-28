import styled from "styled-components";

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  width: 768px;
`;

const Header = styled.header`
  background-color: #042541;
`;

const Nav = styled.nav`
  padding: 16px 0;
  display: flex;
  align-items: center;
  gap: 24px;
`;

export { Container, Header, Nav};