const axios = require('axios');

const changeUserData = ({financialClass, sex, age, region}) => 
axios
  .put('http://127.0.0.1:8000/api/users/'+localStorage.getItem('token')+'/?format=json',
  {
    "id": 5,
    "account_number": "3",
    "email": "ZAEJAWYHRZIKLYBUURBO@gmail.com",
    "name": "ZAEJAWYHRZIKLYBUURBO",
    "marital_status": "relacionamento",
    "gender": sex,
    "social_class": financialClass,
    "age": age,
    "dependents": 2,
    "region": region,
    "date": "fevereiro",
    "food_expense": 2.0,
    "services_expense": 149.6681937538,
    "education_expense": 149.6681937538,
    "restaurants_expense": 149.6681937538,
    "house_expense": 149.6681937538,
    "debts_expense": 149.6681937538,
    "investiments_expense": 149.6681937538,
    "recreation_expense": 149.6681937538,
    "health_expense": 149.6681937538,
    "transport_expense": 149.6681937538,
    "beauty_expense": 149.6681937538,
    "others_expense": 149.6681937538
  });

module.exports = { changeUserData };