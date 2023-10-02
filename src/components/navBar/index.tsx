/* eslint-disable prettier/prettier */
import React from 'react'
import { Direction, Nav, UL } from './styles';

function NavBar() {
    return (
        <Nav>
            <UL>
                <li>
                    <Direction href="/MakeRequisition">Aluno</Direction>
                </li>
                <li>
                    <Direction href="/AdmRequisition">Professor</Direction>
                </li>
            </UL>
        </Nav>
    )
}

export default NavBar;
