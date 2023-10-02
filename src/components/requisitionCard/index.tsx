/* eslint-disable prettier/prettier */
import React from 'react';
import {
  CardContainer,
  Header,
  Title,
  Date,
  Content,
  Footer,
  Status,
  ContainerButtons,
  Button,
} from './styles';
import { useRouter } from 'next/router';
import api from 'services/api';
interface IRequisitionCardProps {
  date: string;
  title: string;
  description: string;
  status: string;
}

const RequisitionCard = ({ date, title, description, status }: IRequisitionCardProps) => {
  const router = useRouter();
  const requisitionId = router.query.id;

  const handleApprove = async () => {
    try {
      const response = await api.put(`/requisition/${requisitionId}/aprovar`);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleReject = async () => {
    try {
      const response = await api.put(`/requisition/${requisitionId}/rejeitar`);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };


  // Acesse a rota atual
  const currentRouter = router.pathname;

  return (
    <CardContainer>
      <Header>
        <Title>{title}</Title>
        <Date>{date}</Date>
      </Header>
      <Content>{description}</Content>
      <Footer>
        {currentRouter === '/AdmRequisition' ?
          (
            <ContainerButtons>
              <Button onClick={handleApprove}>Aprovar</Button>
              <Button onClick={handleReject}>Rejeitar</Button>
            </ContainerButtons>
          )
          : (
            <Status>{status}</Status>

          )}
      </Footer>
    </CardContainer >
  );
};

export default RequisitionCard;
