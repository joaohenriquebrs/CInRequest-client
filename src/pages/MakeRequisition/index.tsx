import React from 'react';
import Image from 'next/image';
import { useForm, Controller } from 'react-hook-form';
import {
  Container,
  ContainerInput,
  Form,
  H1,
  Label,
  FooterContainer,
  FooterLogo,
  FooterLinks,
  FooterLink,
  Division
} from './style';
import { NavBar, SubNavBarStudent } from 'components';
import api from 'services/api';
import { LogoCin } from 'assets';

interface IFormInput {
  secretaria: string;
  atividade: string;
  descricao: string;
  email: string;
}

const optionsSector = ['Secretaria da Graduação', 'Gerência de Sistemas'];
const optionsActivity = [
  'Atividade Complementar',
  'Dispensa de Disciplina',
  'Reserva de Sala',
  'Emissão de Crachá',
  'Ajuste de Cotas de Impressão',
  'Problemas Técnicos'
];
const Formulario: React.FC = () => {
  const { control, handleSubmit, register } = useForm<IFormInput>();

  const onSubmit = async (data: IFormInput) => {
    try {
      const response = await api.post('/requisition', data);
      if (response.status === 200) {
        console.log('Requisição bem-sucedida');
      } else {
        console.error('Falha na requisição');
      }
    } catch (error) {
      console.error('Erro ao enviar a requisição', error);
    }

    console.log(data);
  };

  return (
    <>
      <Division></Division>
      <Container>
        <SubNavBarStudent />

        <Form onSubmit={handleSubmit(onSubmit)}>
          <H1>Formulário de Requisição</H1>
          <ContainerInput>
            <Label>Email:</Label>
            <input {...register('email')} />
          </ContainerInput>

          <ContainerInput>
            <Label>Secretaria:</Label>
            <Controller
              name="secretaria"
              control={control}
              render={({ field }) => (
                <select {...field}>
                  {optionsSector.map((sector, item) => {
                    return (
                      <option key={item} value={sector}>
                        {sector}
                      </option>
                    );
                  })}
                </select>
              )}
            />
          </ContainerInput>
          <ContainerInput>
            <Label>Atividade:</Label>
            <Controller
              name="atividade"
              control={control}
              render={({ field }) => (
                <select {...field}>
                  {optionsActivity.map((activity, item) => {
                    return (
                      <option key={item} value={activity}>
                        {activity}
                      </option>
                    );
                  })}
                </select>
              )}
            />
          </ContainerInput>
          <ContainerInput>
            <Label>Descrição:</Label>
            <textarea {...register('descricao')} />
          </ContainerInput>
          <ContainerInput>
            <button type="submit">Enviar</button>
          </ContainerInput>
        </Form>
      </Container>
      <FooterContainer>
        <FooterLogo href="/MakeRequisition">
          <Image src={LogoCin} alt="Logo do Centro de Informática" width={200} height={70} />
        </FooterLogo>
        <FooterLinks>
          <FooterLink href="#">Sobre</FooterLink>
          <FooterLink href="#">Whatsapp</FooterLink>
          <FooterLink href="#">Instagram</FooterLink>
        </FooterLinks>
      </FooterContainer>
    </>
  );
};

export default Formulario;

export async function getStaticProps() {
  return {
    props: {}
  };
}
