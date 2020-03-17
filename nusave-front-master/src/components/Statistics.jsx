import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DataBox from './DataBox';
import GeneralExpenses from './GeneralExpenses';
  
export const Statistics = ( {getStatistics} ) => {
  const [statistics, setStatistics] = useState('{"Alimentacao": {"ID": 5, "user_last_month": 149.5700339641, "user_average": 129.43970436557834, "category_average": 129.761173054317, "category_percentiles": {"10": 129.26105720025828, "20": 129.4285926022712, "30": 129.539523011242, "40": 129.6616860168455, "50": 129.7558715849356, "60": 129.86079152607698, "70": 129.99409825491293, "80": 130.09101719829147, "90": 130.2413647673025, "100": 130.71799371908625}}, "Assinatura_e_servico": {"ID": 5, "user_last_month": 149.5700339641, "user_average": 129.43970436557834, "category_average": 129.761173054317, "category_percentiles": {"10": 129.26105720025828, "20": 129.4285926022712, "30": 129.539523011242, "40": 129.6616860168455, "50": 129.7558715849356, "60": 129.86079152607698, "70": 129.99409825491293, "80": 130.09101719829147, "90": 130.2413647673025, "100": 130.71799371908625}}, "Educacao": {"ID": 5, "user_last_month": 149.5700339641, "user_average": 129.43970436557834, "category_average": 129.761173054317, "category_percentiles": {"10": 129.26105720025828, "20": 129.4285926022712, "30": 129.539523011242, "40": 129.6616860168455, "50": 129.7558715849356, "60": 129.86079152607698, "70": 129.99409825491293, "80": 130.09101719829147, "90": 130.2413647673025, "100": 130.71799371908625}}, "Beleza": {"ID": 5, "user_last_month": 149.5700339641, "user_average": 129.43970436557834, "category_average": 129.761173054317, "category_percentiles": {"10": 129.26105720025828, "20": 129.4285926022712, "30": 129.539523011242, "40": 129.6616860168455, "50": 129.7558715849356, "60": 129.86079152607698, "70": 129.99409825491293, "80": 130.09101719829147, "90": 130.2413647673025, "100": 130.71799371908625}}, "Saude": {"ID": 5, "user_last_month": 149.5700339641, "user_average": 129.43970436557834, "category_average": 129.761173054317, "category_percentiles": {"10": 129.26105720025828, "20": 129.4285926022712, "30": 129.539523011242, "40": 129.6616860168455, "50": 129.7558715849356, "60": 129.86079152607698, "70": 129.99409825491293, "80": 130.09101719829147, "90": 130.2413647673025, "100": 130.71799371908625}}, "Transporte": {"ID": 5, "user_last_month": 149.5700339641, "user_average": 129.43970436557834, "category_average": 129.761173054317, "category_percentiles": {"10": 129.26105720025828, "20": 129.4285926022712, "30": 129.539523011242, "40": 129.6616860168455, "50": 129.7558715849356, "60": 129.86079152607698, "70": 129.99409825491293, "80": 130.09101719829147, "90": 130.2413647673025, "100": 130.71799371908625}}, "Outros": {"ID": 5, "user_last_month": 149.5700339641, "user_average": 129.43970436557834, "category_average": 129.761173054317, "category_percentiles": {"10": 129.26105720025828, "20": 129.4285926022712, "30": 129.539523011242, "40": 129.6616860168455, "50": 129.7558715849356, "60": 129.86079152607698, "70": 129.99409825491293, "80": 130.09101719829147, "90": 130.2413647673025, "100": 130.71799371908625}}, "Saques": {"ID": 5, "user_last_month": 275.9972415857, "user_average": 238.85132877045996, "category_average": 173.0058801184425, "category_percentiles": {"10": 39.8673421606116, "20": 73.55769506063119, "30": 107.49300944225561, "40": 136.53524729725473, "50": 171.76938479245533, "60": 216.89306571036207, "70": 238.1618577073623, "80": 264.7694855203925, "90": 306.87875838179923, "100": 344.0388710008307}}}');

  useEffect(() => {
    getStatistics()
    .then(resp => setStatistics(resp));
  }, []);

  return (
    <div>
      <GeneralExpenses />
      <DataBox type="Saques"
        statistics={JSON.parse(statistics)['Saques']['category_percentiles']}/>
      <DataBox type="Alimentação"
        statistics={JSON.parse(statistics)['Alimentacao']['category_percentiles']} />
      <DataBox type="Transporte"
        statistics={JSON.parse(statistics)['Transporte']['category_percentiles']}/>
      <DataBox type="Saúde" 
        statistics={JSON.parse(statistics)['Saude']['category_percentiles']}/>
      <DataBox type="Assinatura e serviços" 
        statistics={JSON.parse(statistics)['Assinatura_e_servico']['category_percentiles']}/>
      <DataBox type="Educação" 
        statistics={JSON.parse(statistics)['Educacao']['category_percentiles']}/>
      <DataBox type="Cuidados pessoais" 
        statistics={JSON.parse(statistics)['Beleza']['category_percentiles']}/>
      <DataBox type="Outros" 
        statistics={JSON.parse(statistics)['Outros']['category_percentiles']}/>
    </div>
  );
};