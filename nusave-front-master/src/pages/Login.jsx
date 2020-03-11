import React, { useState } from 'react';
import { FormControl, InputLabel, Input, Button } from '@material-ui/core';
import styled from 'styled-components';

import { login } from '../api/login';

//import { validateEmail } from '../utils/validators';

import * as routes from '../routes';

const Container = styled.div`
  width: 420px;
  padding: 30px 10px 20px 10px;
  margin: auto;
  margin-top: 60px;
  border-radius: 5px;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.20);
  background-color: white;
  color: #404040;
`;

const Header = styled.div`
  margin: auto;
  width: 400px;
  display: flex;
`;

const SelectedHeaderButton = styled.button`
  width: 200px;
  background-color: Transparent;
  background-repeat:no-repeat;
  border: none;
  border-bottom: 2px solid #81259D;
  cursor:pointer;
  overflow: hidden;
  outline: none;
  padding-bottom: 10px;
`;

const UnselectedHeaderButton = styled.button`
  width: 200px;
  background-color: Transparent;
  background-repeat:no-repeat;
  border: none;
  cursor:pointer;
  overflow: hidden;
  outline: none;
  padding-bottom: 10px;
`;

const ButtonDiv = styled.div`
  margin-top: 30px;
`;

const Body = styled.div`
  margin: auto;
  width: 400px;
  text-align: center;
`;

const Login = ({ history }) => {
  const [isLogin, setLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //const canLogin = validateEmail(email) && !!password;

  //const tryLogin = () => login(email, password).then(() => history.push(routes.PERSONAL));

  return (
    <div>
    <Container>
        { isLogin ? 
            (<Header>
                <SelectedHeaderButton>Login</SelectedHeaderButton>
                <UnselectedHeaderButton onClick={()=>setLogin(false)}>Register</UnselectedHeaderButton>
            </Header>) :
            (<Header>
                <UnselectedHeaderButton onClick={()=>setLogin(true)}>Login</UnselectedHeaderButton>
                <SelectedHeaderButton>Register</SelectedHeaderButton>
            </Header>)
        }
      <form>
        {  isLogin ?
            (
            <Body>
                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                </FormControl>
                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="password">Senha</InputLabel>
                    <Input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </FormControl>
                <ButtonDiv>
                    <Button variant="contained" color="primary" size="medium" /*disabled={!canLogin}*/ 
                        onClick={localStorage.setItem('token', 1)}>
                    Entrar
                    </Button>
                </ButtonDiv>
            </Body>) :
            (
            <Body>
            <FormControl margin="normal" fullWidth>
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
            </FormControl>
            <FormControl margin="normal" fullWidth>
                <InputLabel htmlFor="password">Senha</InputLabel>
                <Input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </FormControl>
            <ButtonDiv>
                <Button variant="contained" color="primary" size="medium" /*disabled={!canLogin}*/ 
                    onClick={localStorage.setItem('token', 1)}>
                Cadastrar
                </Button>
            </ButtonDiv>
            </Body>)
        }
      </form>
    </Container>
    </div>
  );
};

export default Login;