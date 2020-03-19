import React from 'react';
import styled from 'styled-components';

const ProfileInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 6% 24px 6%;
  background-color: transparent;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 6px;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.10);
  background-color: white;
  color: #404040;
`;

const NameBox = styled.div`
  padding: 0 36px 0 36px;
  margin: 24px 0 24px 0;
  border-right: 2px solid #707070;
  font-size: 50px;
  display: flex;
  align-items: center;
`;

const SideDiv = styled.div`
  width: 100%;
  margin: 24px 0 24px 24px;
  font-size: 32px;
`;

const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Image = styled.div`
  margin: 10px 10px 0 0;
`;

const AdviseDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-size: 20px;
  margin: 0 6% 24px 6%;
`;

export const Profile = ({name}) => (

  <div>
    <ProfileInfo>
      <NameBox>{name}</NameBox>
      <FlexBox>
        <SideDiv>Pontuação: <br/>
          <FlexBox>
            <Image><img style={{width:'50px', height:'50px'}} src="coin_low_resolution.png" /></Image> 
            <div style={{ display:'flex', alignItems:'center' }}>1500 XP</div>
          </FlexBox>
        </SideDiv>
        <SideDiv>Objetivos alcançados: <br /> 
          <FlexBox>
            <Image><img src="E1_lr.png" title="poupador"/></Image>
            <Image><img src="E2_lr.png" title="investidor"/></Image>
            <Image><img src="E3_lr.png" title="sem dívidas"/></Image>
            <Image><img src="E4_lr.png" title="Gastos conscientes com transporte"/></Image>
            <Image><img src="E5_lr.png" title="Gastos conscientes com cuidados pessoais"/></Image>
            <Image><img src="E6_lr.png" title="Gastos conscientes com restaurantes e bares"/></Image>
          </FlexBox>
        </SideDiv>
      </FlexBox>
    </ProfileInfo>
    <AdviseDiv>
      <Image><img style={{width:'25px', height:'25px'}} src="exclamation.png" /></Image> 
      <div style={{marginTop:'6px'}}>
        Movimentação de R$ 3700,00 dia 11/03.
      </div>
    </AdviseDiv>
    <AdviseDiv>
      <Image><img style={{width:'25px', height:'25px'}} src="exclamation.png" /></Image> 
      <div style={{marginTop:'6px'}}>
        Gastos elevados com alimentação. <a href="">Veja como economizar na sua região.</a>
      </div>
    </AdviseDiv>
    <AdviseDiv>
      <Image><img style={{width:'25px', height:'25px'}} src="exclamation.png" /></Image> 
      <div style={{marginTop:'6px'}}>
        Despesa esperada de R$ 3580,00 até o fim do mês.
      </div>
    </AdviseDiv>
  </div>
);