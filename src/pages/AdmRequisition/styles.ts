/* eslint-disable prettier/prettier */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50rem; 
  gap: 1.2rem;
  height: 100vh; 
`;

export const Title = styled.h2`
  font-size: 2.8rem;
  color: red; 
  font-weight: bold;
  margin-top: -300px;
  margin-bottom: 120px;
`;

export const ContainerRequisitions = styled.div`
  display: flex;
  flex-wrap: wrap; 
  justify-content: space-between; 
  width: 100%;
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