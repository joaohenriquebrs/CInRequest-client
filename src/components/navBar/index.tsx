/* eslint-disable prettier/prettier */
import React from 'react';
import Image from 'next/image';
import { Direction, Nav, UL, LiPerson, DivImage } from './styles';
import { LogoCin } from 'assets';

function NavBar() {
    return (
        <Nav>
            <DivImage href="/MakeRequisition">
                <Image src={LogoCin} alt='Logo do Centro de Informática' width={200} height={70} />
            </DivImage>
            <UL>
                <LiPerson>
                    <Direction href="/MakeRequisition">Aluno</Direction>
                </LiPerson>
                <LiPerson>
                    <Direction href="/AdmRequisition">Professor</Direction>
                </LiPerson>
            </UL>
        </Nav>
    )
}

export default NavBar;
