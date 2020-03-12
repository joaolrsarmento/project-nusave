import React from 'react';
import styled from 'styled-components';
import PremiumIcon from '@material-ui/icons/MonetizationOn';

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
  font-size: 56px;
  display: flex;
  align-items: center;
`;

const SideDiv = styled.div`
  width: 100%;
  margin: 24px 0 24px 24px;
  font-size: 36px;
`;

const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Image = styled.div`
  margin: 10px 10px 0 0;
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
            <Image><img src="E1_lr.png" /></Image>
            <Image><img src="E2_lr.png" /></Image>
            <Image><img src="E3_lr.png" /></Image>
            <Image><img src="E4_lr.png" /></Image>
            <Image><img src="E5_lr.png" /></Image>
            <Image><img src="E6_lr.png" /></Image>
          </FlexBox>
        </SideDiv>
      </FlexBox>
    </ProfileInfo>
  </div>
);