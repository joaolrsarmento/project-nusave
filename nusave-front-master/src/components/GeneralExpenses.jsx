import React, { useState, useEffect, PureComponent } from 'react';
import styled from 'styled-components';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

import { getUser } from '../api/user';

import {
  PieChart, Pie, Sector, Cell, Legend
} from 'recharts';

import{
  DataBoxContainer, DataBoxHeader, DataBoxBody, DataBoxName
} from './DataBox';

const data = [
  { name: 'Alimentação', value: 400 },
  { name: 'Assinatura e serviços', value: 300 },
  { name: 'Educação', value: 300 },
  { name: 'Saúde', value: 200 },
  { name: 'Cuidados pessoais', value: 100 },
  { name: 'Transporte', value: 250 },
  { name: 'Saques', value: 100 },
  { name: 'Outros', value: 100 },
];
  
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#DC143C', '#A122BD', '#CA45F2', '#A1B1C2'];

const w = window.innerWidth;
  
const GeneralExpenses = () => {
const [user, setUser] = useState('{"id":5,"account_number":"4","email":"BOZWOWUSUKCQNDYLGHMN@gmail.com","name":"BOZWOWUSUKCQNDYLGHMN","marital_status":"solteiro","gender":"feminino","social_class":"A","age":25,"dependents":0,"region":"interior","date":"","food_expense":150.596882615,"services_expense":150.596882615,"education_expense":150.596882615,"restaurants_expense":150.596882615,"house_expense":150.596882615,"debts_expense":150.596882615,"investiments_expense":150.596882615,"recreation_expense":150.596882615,"health_expense":150.596882615,"transport_expense":150.596882615,"beauty_expense":150.596882615,"others_expense":150.596882615}');

useEffect(() => {
  getUser()
  .then(resp => setUser(resp.data));
}, []);

const data = [
  { name: 'Alimentação', value: user.food_expense },
  { name: 'Assinatura e serviços', value: user.services_expense },
  { name: 'Educação', value: user.education_expense },
  { name: 'Saúde', value: user.health_expense },
  { name: 'Cuidados pessoais', value: user.beauty_expense },
  { name: 'Transporte', value: user.transport_expense },
  { name: 'Saques', value: user.debts_expense },
  { name: 'Outros', value: user.others_expense },
];

console.log(user);

return (
    <DataBoxContainer>
        <DataBoxHeader>
            <div style={{ margin: '0 5px 0 5px' }}>
            
            </div>
            <DataBoxName> Despesas gerais </DataBoxName>
        </DataBoxHeader>
        <DataBoxBody>
        <PieChart width={/*w/2*/500} height={300}>
            <Pie data={data} cx="50%" cy="50%" outerRadius={80} label>
                {
                data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]}/>
                ))
                }
            </Pie>
            <Legend />
        </PieChart>
        </DataBoxBody>
    </DataBoxContainer>
);
};

export default GeneralExpenses;