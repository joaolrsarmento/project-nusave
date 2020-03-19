import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { maskMoney, unmaskMoney } from '../masks';
import { changeUserData } from '../api/user';

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
const [saques, setSaques] = useState(120.85);
const [alimentacao, setAlimentacao] = useState(800.55);

const [financialClass, setFinancialClass] = useState("A");
const [region, setRegion] = useState("SP");
const [age, setAge] = useState(2);
const [sex, setSex] = useState("Masculino");

return (
  
  <div>
    <Container>
      <Box>
        <TitleDiv>Gastos no último mês</TitleDiv>
        <FieldDiv>
          <NameDiv>Gasto no último mês com saques:</NameDiv>
          <InputDiv>
            <input value={saques} maxLength="7"
              onChange={event => {
                setSaques(event.target.value);
                console.log(saques);
            }}/>
          </InputDiv>
        </FieldDiv>
        <FieldDiv>
          <NameDiv>Gasto no último mês com alimentação:</NameDiv>
          <InputDiv>
            <input value={alimentacao} maxLength="7"
              onChange={event => {
                setAlimentacao(event.target.value);
                console.log(alimentacao);
            }}/>
          </InputDiv>
        </FieldDiv>
        <FieldDiv>
          <NameDiv>Gasto no último mês com transporte:</NameDiv>
          <InputDiv><input value="320.60"/></InputDiv>
        </FieldDiv>
        <FieldDiv>
          <NameDiv>Gasto no último mês com saúde:</NameDiv>
          <InputDiv><input value="428.30"/></InputDiv>
        </FieldDiv>
        <FieldDiv>
          <NameDiv>Gasto no último mês com assinatura e serviços:</NameDiv>
          <InputDiv><input value="300.00"/></InputDiv>
        </FieldDiv>
        <FieldDiv>
          <NameDiv>Gasto no último mês com educação:</NameDiv>
          <InputDiv><input value="500.50"/></InputDiv>
        </FieldDiv>
        <FieldDiv>
          <NameDiv>Gasto no último mês com cuidados pessoais:</NameDiv>
          <InputDiv><input value="150.40"/></InputDiv>
        </FieldDiv>
        <FieldDiv>
          <NameDiv>Gasto no último mês com outros:</NameDiv>
          <InputDiv><input value="260.00"/></InputDiv>
        </FieldDiv>
      </Box>
      <Box>
        <TitleDiv>Gastos no último ano</TitleDiv>
        <FieldDiv>
          <NameDiv>Gasto no último ano com saques:</NameDiv>
          <InputDiv><input value="1520.30"/></InputDiv>
        </FieldDiv>
        <FieldDiv>
          <NameDiv>Gasto no último ano com alimentação:</NameDiv>
          <InputDiv><input value="9100.10"/></InputDiv>
        </FieldDiv>
        <FieldDiv>
          <NameDiv>Gasto no último ano com transporte:</NameDiv>
          <InputDiv><input value="3730.40"/></InputDiv>
        </FieldDiv>
        <FieldDiv>
          <NameDiv>Gasto no último ano com saúde:</NameDiv>
          <InputDiv><input value="5500.00"/></InputDiv>
        </FieldDiv>
        <FieldDiv>
          <NameDiv>Gasto no último ano com assinatura e serviços:</NameDiv>
          <InputDiv><input value="1400.20"/></InputDiv>
        </FieldDiv>
        <FieldDiv>
          <NameDiv>Gasto no último ano com educação:</NameDiv>
          <InputDiv><input value="6100.30"/></InputDiv>
        </FieldDiv>
        <FieldDiv>
          <NameDiv>Gasto no último ano com cuidados pessoais:</NameDiv>
          <InputDiv><input value="1390.10"/></InputDiv>
        </FieldDiv>
        <FieldDiv>
          <NameDiv>Gasto no último ano com outros:</NameDiv>
          <InputDiv><input value="4000.00"/></InputDiv>
        </FieldDiv>
      </Box>
      <TitleDiv>Dados pessoais</TitleDiv>
      <Box>
        <FieldDiv>
          <NameDiv>Faixa salarial: </NameDiv>
          <InputDiv><input value="4000-6000 reais"/></InputDiv>
        </FieldDiv>
        <FieldDiv>
          <NameDiv>Locallização</NameDiv>
          <InputDiv><input value="São Paulo"/></InputDiv>
        </FieldDiv>
      </Box>
      <Box>
        <FieldDiv>
          <NameDiv>Faixa etária:</NameDiv>
          <InputDiv><input value="18-30"/></InputDiv>
        </FieldDiv>
        <FieldDiv>
          <NameDiv>Sexo:</NameDiv>
          <InputDiv><input value="Masculino"/></InputDiv>
        </FieldDiv>
      </Box>
      <ButtonDiv>
        <Button 
          onClick={()=>changeUserData(
            {financialClass, sex, age, region, saques, alimentacao}
          )}>salvar alterações</Button>
      </ButtonDiv>
    </Container>
  </div>
);
};