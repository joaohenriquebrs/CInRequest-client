import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 90vh;
  background-color: #FFF;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
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

export const FooterContainer = styled.div`
    background-color: red;
    height: 183px;
    width: 100%;
    display: flex;
    justify-content: space-between; 
    align-items: center
    font-family: 'Ubuntu', sans-serif;
`;

export const FooterLogo = styled.a`
  margin-left: 70px;
  margin-top: 40px;
`;

export const FooterLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  font-family: 'Ubuntu', sans-serif;
  margin-right: 130px;
`;

export const FooterLink = styled.a`
  color: #fff;
  font-size: 24px;
  margin-left: 88px;
  font-weight: bold;
  font-weight: 600;
  text-decoration: none;
  padding-bottom: 4px;
  border-bottom: 2px solid #fff;

  &:hover {
    text-decoration: none;
  }
`;

export const Division = styled.div`
  height: 100px;
  width: 99.1vw;
  background-color: red;
  border-top: 5px solid #000;
  border-bottom: 5px solid #000;
`;