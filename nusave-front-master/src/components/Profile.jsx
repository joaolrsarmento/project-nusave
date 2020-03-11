import React from 'react';
import styled from 'styled-components';
import PremiumIcon from '@material-ui/icons/MonetizationOn';

const PersonalInfo = styled.div`
  margin: 0 6% 24px 6%;
  background-color: transparent;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 3px 0;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.10);
  background-color: white;
  color: #404040;
`;

const UpperSection = styled.div`
  display: flex;
  margin: 6px 12px 6px 12px;
  padding: 0 0 4px 0;
  border-bottom: 1px solid #ccc;
`;

const Section = styled.div`
  display: flex;
  margin: 6px 12px 6px 12px;
`;

const ImageDiv = styled.div`
  width: 80px;
  height: 80px;
  margin-right: 18px;
`;

const BigTextDiv = styled.div`
  width: 100%;
  font-size: 56px;
  padding: 4px;
`;

const SmallTextDiv = styled.div`
  width: 100%;
  font-size: 24px;
  padding: 4px;
`;

const StyledPremiumIcon = styled(PremiumIcon)`
  width: 48px;
  height: 48px;
  margin-right: 6px;
`;

const Badges = styled.div`
  width: 120px;
  font-size: 32px;
  padding: 4px;
`;


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

export const Profile = () => (
  <div>
    <ProfileInfo>
      <NameBox>Eduardo</NameBox>
      <FlexBox>
        <SideDiv>Pontuação: <br/>
          <FlexBox>
            <Image><img style={{width:'50px', height:'50px'}} src="coin low resolution.png" /></Image> 
            <div style={{ display:'flex', alignItems:'center' }}>1500 XP</div>
          </FlexBox>
        </SideDiv>
        <SideDiv>Objetivos alcançados: <br /> 
          <FlexBox>
            <Image><img src="E1 lr.png" /></Image>
            <Image><img src="E2 lr.png" /></Image>
            <Image><img src="E3 lr.png" /></Image>
            <Image><img src="E4 lr.png" /></Image>
            <Image><img src="E5 lr.png" /></Image>
            <Image><img src="E6 lr.png" /></Image>
          </FlexBox>
        </SideDiv>
      </FlexBox>
    </ProfileInfo>

    <PersonalInfo>
      <UpperSection>
        <ImageDiv><img src="coin low resolution.png" /></ImageDiv>
        <BigTextDiv>3128</BigTextDiv>
        <Badges>embl.</Badges>
      </UpperSection>
      <Section>
        <SmallTextDiv>Nível 3</SmallTextDiv>
      </Section>
      <Section>
        <SmallTextDiv>Colocar avisos aqui</SmallTextDiv>
      </Section>
    </PersonalInfo>
  </div>
);