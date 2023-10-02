import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 90vh;
  background-color: #fcfcfc;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  color: red;
`;

export const Form = styled.form`
  width: 100%;
  height: 50%;
  max-width: 600px;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px #ccc;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 1.2rem;
`;

export const H1 = styled.h1``;

export const ContainerInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const Label = styled.label`
  font-size: 1.2rem;
  font-weight: bold;
`;
