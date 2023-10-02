/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import Link from 'next/link';

export const Nav = styled.nav`
  width: 100%;
  height: 10vh;
  background: #fcfcfc;
  border-bottom: 5px solid red;

  display: flex;
`;

export const Direction = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 1.2rem;
  font-weight: bolder;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: red;
    border-bottom: 1px solid red;
  }
`;

export const UL = styled.ul`
  display: flex;
  font-size: 1.2rem;
  list-style: none;
  width: 40%;
  height: 100%;

  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-weight: bolder;

  li {
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      color: red;
      border-bottom: 1px solid red;
    }
  }
`;
