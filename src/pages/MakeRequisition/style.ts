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
  max-width: 600px;
  height: 450px;
  background-color: #f5f5f5; 
  padding: 20px;
  border-radius: 10px; 
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem; 
`;

export const H1 = styled.h1`
  font-size: 2.5rem;
  color: red; 
  margin-bottom: 1rem;
`;

export const ContainerInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem; /* Espaçamento entre os inputs */
`;

export const Label = styled.label`
  font-size: 1.8rem;
  font-weight: bold;
  color: #333; 
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