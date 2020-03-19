const axios = require('axios');

const getName = () => 
axios
  .get('http://127.0.0.1:8000/api/users/'+localStorage.getItem('token')+'?format=json')
  .then(resp => resp.data.name);

const getUser = () =>
axios
  .get('http://127.0.0.1:8000/api/users/'+localStorage.getItem('token')+'?format=json')

const getStatistics = () => 
axios
  .get('http://127.0.0.1:8000/api/statistics/'+localStorage.getItem('token')+'?format=json')
  .then(resp => resp.data.user_filters)
  .then(resp => resp.replace(/'/g, '"'));

const changeUserData = ({financialClass, sex, age, region, saques, alimentacao}) => 
axios
  .post('http://127.0.0.1:8000/api/users/'+localStorage.getItem('token'),
  {
    "id": localStorage.getItem('token'),
    "account_number": "4",
    "email": "BOZWOWUSUKCQNDYLGHMN@gmail.com",
    "name": "Marcos",
    "marital_status": "solteiro",
    "gender": sex,
    "social_class": financialClass,
    "age": age,
    "dependents": 0,
    "region": region,
    "date": "123",
    "food_expense": alimentacao,
    "services_expense": 300.00,
    "education_expense": 500.50,
    "restaurants_expense": 120.90,
    "house_expense": 630.40,
    "debts_expense": saques,
    "investiments_expense": 300.00,
    "recreation_expense": 110.00,
    "health_expense": 428.30,
    "transport_expense": 320.60,
    "beauty_expense": 150.40,
    "others_expense": 260.00
  });

module.exports = { changeUserData, getName, getStatistics, getUser };