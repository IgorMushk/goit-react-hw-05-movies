import styled from 'styled-components';

const FormWrapper = styled.div`
  margin-left: 10px;
  margin-top: 10px;
`;

const ButtonSubmit = styled.button`
margin-left: 15px;
  height: 36px;
  width: 100px;
  color: #032541;
  border-radius: 4px;
  transition: all 250ms linear;
  border: 1px solid #032541;
  cursor: pointer;
  transition: linear 300ms;
  &:hover {
    color: white;
    background-color: #032541;
  }
  &:active {
      scale: 0.85;
    }
`;

const FormInput = styled.input`
height: 32px;
width: 210;
padding-left: 10px;
border-radius: 4px;
border: 1px solid #032541;
`;


export { FormWrapper, ButtonSubmit, FormInput };
