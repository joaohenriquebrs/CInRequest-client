/* eslint-disable prettier/prettier */
import React from 'react'
import { ContainerButtons, Direction } from './styles';

function SubNavBarStudent() {
    return (
        <ContainerButtons>
            <Direction href="/MakeRequisition">Enviar requisição</Direction>
            <Direction href="/StudentRequisitions">Minhas requisições</Direction>
        </ContainerButtons>
    )
}

export default SubNavBarStudent;