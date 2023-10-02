import React, { useState } from 'react';
import { CustomPagination, NavBar, RequisitionCard } from 'components'
import { Container, ContainerRequisitions, H2 } from './styles';
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

const EmployeeRequisitions = () => {
    const requisitions = [
        {
            date: '2023-09-30',
            title: 'Requisição 1',
            description: 'Descrição da Requisição 1',
            status: 'Em Andamento',
        },
        {
            date: '2023-09-29',
            title: 'Requisição 2',
            description: 'Descrição da Requisição 2',
            status: 'Concluída',
        },

        {
            date: '2023-09-30',
            title: 'Requisição 3',
            description: 'Descrição da Requisição 3',
            status: 'Em Andamento',
        },
        {
            date: '2023-09-29',
            title: 'Requisição 4',
            description: 'Descrição da Requisição 4',
            status: 'Concluída',
        },
        {
            date: '2023-09-30',
            title: 'Requisição 5',
            description: 'Descrição da Requisição 5',
            status: 'Em Andamento',
        },
        {
            date: '2023-09-29',
            title: 'Requisição 6',
            description: 'Descrição da Requisição 6',
            status: 'Concluída',
        },
        {
            date: '2023-09-30',
            title: 'Requisição 7',
            description: 'Descrição da Requisição 7',
            status: 'Em Andamento',
        },
        {
            date: '2023-09-29',
            title: 'Requisição 8',
            description: 'Descrição da Requisição 8',
            status: 'Concluída',
        },
        {
            date: '2023-09-30',
            title: 'Requisição 9',
            description: 'Descrição da Requisição 9',
            status: 'Em Andamento',
        },
        {
            date: '2023-09-29',
            title: 'Requisição 10',
            description: 'Descrição da Requisição 10',
            status: 'Concluída',
        },

    ];
    const [currentPage, setCurrentPage] = useState<number>(1);
    const totalPages = Math.ceil(requisitions.length / 2);
    const itemsPerPage = 2;

    // Calcula o índice inicial e final dos itens a serem exibidos
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedItems = requisitions.slice(startIndex, endIndex);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <>
            <NavBar />
            <Container>
                <H2>Requisições de pessoas alunas</H2>
                <ContainerRequisitions>
                    {displayedItems.map((requisition, index) => (
                        <div key={index}>
                            <RequisitionCard
                                date={requisition.date}
                                title={requisition.title}
                                description={requisition.description}
                                status={requisition.status} />
                        </div>
                    ))}
                </ContainerRequisitions>
                <CustomPagination
                    totalPages={totalPages}
                    currentPage={currentPage}
                    onChange={handlePageChange}
                />
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

export default EmployeeRequisitions;