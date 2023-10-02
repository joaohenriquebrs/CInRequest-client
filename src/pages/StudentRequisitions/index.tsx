/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { NavBar, RequisitionCard, SubNavBarStudent } from 'components';
import { Container, H2, RequisitionsContainer, Selected } from './styles';
import api from 'services/api';


const fetchData = async () => {
    try {
        const response = await api.get('/requisition');

        const data = response.data;

        return data;
    } catch (error) {
        console.error('Erro ao fazer a requisição GET:', error);
        throw error;
    }
};

const StudentRequisitions = ({ }) => {
    const requisitions = [
        {
            date: '2023-09-30',
            title: 'Requisição 1',
            description: 'Descrição da Requisição 1',
            status: 'Aberto',
        },
        {
            date: '2023-09-29',
            title: 'Requisição 2',
            description: 'Descrição da Requisição 2',
            status: 'Fechada',
        },

        {
            date: '2023-09-30',
            title: 'Requisição 1',
            description: 'Descrição da Requisição 1',
            status: 'Aberto',
        },
        {
            date: '2023-09-29',
            title: 'Requisição 2',
            description: 'Descrição da Requisição 2',
            status: 'Fechada',
        },
        {
            date: '2023-09-30',
            title: 'Requisição 1',
            description: 'Descrição da Requisição 1',
            status: 'Aberto',
        },
        {
            date: '2023-09-29',
            title: 'Requisição 2',
            description: 'Descrição da Requisição 2',
            status: 'Fechada',
        },
        {
            date: '2023-09-30',
            title: 'Requisição 1',
            description: 'Descrição da Requisição 1',
            status: 'Aberto',
        },
        {
            date: '2023-09-29',
            title: 'Requisição 2',
            description: 'Descrição da Requisição 2',
            status: 'Fechada',
        },
        {
            date: '2023-09-30',
            title: 'Requisição 1',
            description: 'Descrição da Requisição 1',
            status: 'Aberto',
        },
        {
            date: '2023-09-29',
            title: 'Requisição 2',
            description: 'Descrição da Requisição 2',
            status: 'Fechada',
        },

    ];

    const [statusFilter, setStatusFilter] = useState('Todos');
    // const requisitions = data || [];

    const filteredRequisitions = statusFilter === 'Todos'
        ? requisitions
        : requisitions.filter(requisition => requisition.status === statusFilter);

    return (
        <>
            <NavBar />
            <Container>
                <SubNavBarStudent />
                <H2>Minhas requisições</H2>

                <Selected
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                >
                    <option value="Todos">Todos</option>
                    <option value="Aberto">Aberto</option>
                    <option value="Fechada">Fechada</option>
                </Selected>

                <RequisitionsContainer>
                    {filteredRequisitions.map((requisition, index) => (
                        <RequisitionCard
                            key={index}
                            date={requisition.date}
                            title={requisition.title}
                            description={requisition.description}
                            status={requisition.status} />
                    ))}
                </RequisitionsContainer>
            </Container>
        </>
    );
};

export async function getServerSideProps() {
    try {
        const data = await fetchData();
        return {
            props: {
                data,
            },
        };
    } catch (error) {
        console.log(error)
        return {
            props: {
                data: null,
            },
        };
    }
}

export default StudentRequisitions;