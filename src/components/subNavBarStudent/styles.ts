/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import Link from 'next/link';

export const ContainerButtons = styled.div`
  width: 60rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Direction = styled(Link)`
  width: 15rem;
  height: 7rem;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  color: red;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;

  &:hover {
    background-color: #f1f1f1;
  }
`;
