import React, { useState, useEffect, PureComponent } from 'react';
import styled from 'styled-components';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

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