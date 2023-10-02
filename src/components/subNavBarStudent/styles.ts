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
  height: 5rem;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 0px 5px #ccc;
  transition: all 0.2s ease-in-out;

  color: red;

  font-size: 14px;
  font-weight: bold;
  text-decoration: none;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;

  &:hover {
    background-color: #f0f0f0;
  }
`;
