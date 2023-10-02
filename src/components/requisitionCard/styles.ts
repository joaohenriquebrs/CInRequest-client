/* eslint-disable prettier/prettier */
import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: #fcfcfc;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 16px;
  margin: 16px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease-in-out;

  width: 30rem;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 8px;
`;

export const Title = styled.h3`
  font-size: 20px;
  margin: 0;
`;

export const Date = styled.p`
  font-size: 16px;
  margin: 0;
`;

export const Content = styled.div`
  font-size: 18px;
  margin-bottom: 8px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Status = styled.span`
  color: red;
  font-weight: bold;
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.2rem;
`;

export const Button = styled.button`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 8px;
  margin: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #f0f0f0;
  }
`;