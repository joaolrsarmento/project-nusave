import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DataBox from './DataBox';
import GeneralExpenses from './GeneralExpenses';
  
export const Statistics = () => {

return (
  <div>
    <GeneralExpenses />
    <DataBox type="Saques"/>
    <DataBox type="Alimentação"/>
    <DataBox type="Transporte"/>
    <DataBox type="Saúde"/>
    <DataBox type="Assinatura e serviços"/>
    <DataBox type="Educação"/>
    <DataBox type="Cuidados pessoais"/>
    <DataBox type="Outros"/>
  </div>
);
};