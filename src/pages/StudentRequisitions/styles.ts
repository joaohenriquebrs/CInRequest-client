/* eslint-disable prettier/prettier */
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 90vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const H2 = styled.h2`
    font-size: 3rem;
    font-weight: bold;
    color:  red;
`;

export const RequisitionsContainer = styled.div`
  width: 80rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  overflow-y: scroll;
`;

export const Selected = styled.select`
  width: 25rem;
  height: 5rem;

  margin: 1rem 0;
  padding: 0 1rem;

  border-radius: 0.5rem;
  border: 1px solid #000;

  font-size: 1.6rem;
`;