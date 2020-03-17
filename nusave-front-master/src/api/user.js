const axios = require('axios');

const getName = () => 
axios
  .get('http://127.0.0.1:8000/api/users/'+localStorage.getItem('token')+'/?format=json')
  .then(resp => resp.data.name);

const getUser = () =>
axios
  .get('http://127.0.0.1:8000/api/users/'+localStorage.getItem('token')+'/?format=json')

const getStatistics = () => 
axios
  .get('http://127.0.0.1:8000/api/statistics/'+localStorage.getItem('token')+'/?format=json')
  .then(resp => resp.data.user_filters)
  .then(resp => resp.replace(/'/g, '"'));

/*const changeUserData = ({financialClass, sex, age, region, saques, alimentacao}) => 
axios
  .put('http://127.0.0.1:8000/api/users/'+localStorage.getItem('token')+'/?format=json',
  {
    "id": localStorage.getItem('token'),
    "account_number": "4",
    "email": "BOZWOWUSUKCQNDYLGHMN@gmail.com",
    "name": "BOZWOWUSUKCQNDYLGHMN",
    "marital_status": "solteiro",
    "gender": sex,
    "social_class": financialClass,
    "age": age,
    "dependents": 0,
    "region": region,
    "date": "",
    "food_expense": alimentacao,
    "services_expense": 150.596882615,
    "education_expense": 150.596882615,
    "restaurants_expense": 150.596882615,
    "house_expense": 150.596882615,
    "debts_expense": saques,
    "investiments_expense": 150.596882615,
    "recreation_expense": 150.596882615,
    "health_expense": 150.596882615,
    "transport_expense": 150.596882615,
    "beauty_expense": 150.596882615,
    "others_expense": 150.596882615
  });*/

const changeUserData = () => 
axios
  .put('http://127.0.0.1:8000/api/users/'+localStorage.getItem('token')+'/?format=json',
  {
    "id": 5,
    "account_number": "4",
    "email": "BOZWOWUSUKCQNDYLGHMN@gmail.com",
    "name": "BOZWOWUSUKCQNDYLGHMN",
    "marital_status": "solteiro",
    "gender": "feminino",
    "social_class": "A",
    "age": 25,
    "dependents": 0,
    "region": "interior",
    "date": "",
    "food_expense": 150.596882615,
    "services_expense": 150.596882615,
    "education_expense": 150.596882615,
    "restaurants_expense": 150.596882615,
    "house_expense": 150.596882615,
    "debts_expense": 150.596882615,
    "investiments_expense": 150.596882615,
    "recreation_expense": 150.596882615,
    "health_expense": 150.596882615,
    "transport_expense": 150.596882615,
    "beauty_expense": 150.596882615,
    "others_expense": 150.596882615
  });

module.exports = { changeUserData, getName, getStatistics, getUser };