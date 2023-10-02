/* eslint-disable prettier/prettier */
// styles.ts
import styled from 'styled-components';
import Link from 'next/link';

export const Nav = styled.nav`
  width: 100%;
  height: 10vh;
  background: red; 
  border-bottom: 5px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Direction = styled(Link)`
  text-decoration: none;
  color: #FFFFFF; 
  font-size: 2.6rem; 
  font-weight: bold;
  margin: 0 2rem;
  transition: color 0.3s ease-in-out;
  &:hover {
    color: #000; 
  }
`;

export const LiPerson = styled.li`
  margin: 50px;
`;

export const UL = styled.ul`
  display: flex;
  list-style: none;
`;

export const DivImage = styled.a`
  margin-right: 500px;
`;