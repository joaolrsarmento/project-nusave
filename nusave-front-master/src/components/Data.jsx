import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { maskMoney, unmaskMoney } from '../masks';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Box = styled.div`
  margin: auto;
`;

const TitleDiv = styled.div`
  font-size: 24px;
  width: 100%;
  margin: 0 0 24px 0;
  text-align: center;
`;

const FieldDiv = styled.div`
  margin: 0 0 24px 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const NameDiv = styled.div`
  width: 300px;
  margin: 0 12px 0 0;
`;

const InputDiv = styled.div`
`;

const ButtonDiv = styled.div`
  text-align: center;
  margin-bottom: 18px;
  width: 100%;
`;

const Button = styled.button`
  width: 150px;
`;
  
export const Data = () => {
  const [lastMonthWithdraw, setLastMonthWithdraw] = useState("1200");

  const [financialClass, setFinancialClass] = useState("A");
  const [region, setRegion] = useState("SP");
  const [age, setAge] = useState("18-30");
  const [sex, setSex] = useState("Masculino");

return (
  
  <div>
    <Container>
      <Box>
        <TitleDiv>Gastos no último mês</TitleDiv>
        <FieldDiv>
          <NameDiv>Gasto no último mês com saques:</NameDiv>
          <InputDiv>
            <input value={maskMoney(lastMonthWithdraw)} maxLength="7"
              onChange={event => {
                setLastMonthWithdraw(unmaskMoney(event.target.value));
            }}/>
          </InputDiv>
        </FieldDiv>
        <FieldDiv>
          <NameDiv>Gasto no último mês com alimentação:</NameDiv>
          <InputDiv><input /></InputDiv>
        </FieldDiv>
        <FieldDiv>
          <NameDiv>Gasto no último mês com transporte:</NameDiv>
          <InputDiv><input /></InputDiv>
        </FieldDiv>
        <FieldDiv>
          <NameDiv>Gasto no último mês com saúde:</NameDiv>
          <InputDiv><input /></InputDiv>
        </FieldDiv>
        <FieldDiv>
          <NameDiv>Gasto no último mês com assinatura e serviços:</NameDiv>
          <InputDiv><input /></InputDiv>
        </FieldDiv>
        <FieldDiv>
          <NameDiv>Gasto no último mês com educação:</NameDiv>
          <InputDiv><input /></InputDiv>
        </FieldDiv>
        <FieldDiv>
          <NameDiv>Gasto no último mês com cuidados pessoais:</NameDiv>
          <InputDiv><input /></InputDiv>
        </FieldDiv>
        <FieldDiv>
          <NameDiv>Gasto no último mês com outros:</NameDiv>
          <InputDiv><input /></InputDiv>
        </FieldDiv>
      </Box>
      <Box>
        <TitleDiv>Gastos no último ano</TitleDiv>
        <FieldDiv>
          <NameDiv>Gasto no último ano com saques:</NameDiv>
          <InputDiv><input /></InputDiv>
        </FieldDiv>
        <FieldDiv>
          <NameDiv>Gasto no último ano com alimentação:</NameDiv>
          <InputDiv><input /></InputDiv>
        </FieldDiv>
        <FieldDiv>
          <NameDiv>Gasto no último ano com transporte:</NameDiv>
          <InputDiv><input /></InputDiv>
        </FieldDiv>
        <FieldDiv>
          <NameDiv>Gasto no último ano com saúde:</NameDiv>
          <InputDiv><input /></InputDiv>
        </FieldDiv>
        <FieldDiv>
          <NameDiv>Gasto no último ano com assinatura e serviços:</NameDiv>
          <InputDiv><input /></InputDiv>
        </FieldDiv>
        <FieldDiv>
          <NameDiv>Gasto no último ano com educação:</NameDiv>
          <InputDiv><input /></InputDiv>
        </FieldDiv>
        <FieldDiv>
          <NameDiv>Gasto no último ano com cuidados pessoais:</NameDiv>
          <InputDiv><input /></InputDiv>
        </FieldDiv>
        <FieldDiv>
          <NameDiv>Gasto no último ano com outros:</NameDiv>
          <InputDiv><input /></InputDiv>
        </FieldDiv>
      </Box>
      <TitleDiv>Dados pessoais</TitleDiv>
      <Box>
        <FieldDiv>
          <NameDiv>Faixa salarial: </NameDiv>
          <InputDiv><input /></InputDiv>
        </FieldDiv>
        <FieldDiv>
          <NameDiv>Locallização</NameDiv>
          <InputDiv><input /></InputDiv>
        </FieldDiv>
      </Box>
      <Box>
        <FieldDiv>
          <NameDiv>Faixa etária:</NameDiv>
          <InputDiv><input /></InputDiv>
        </FieldDiv>
        <FieldDiv>
          <NameDiv>Sexo:</NameDiv>
          <InputDiv><input /></InputDiv>
        </FieldDiv>
      </Box>
      <ButtonDiv>
        <Button>salvar alterações</Button>
      </ButtonDiv>
    </Container>
  </div>
);
};