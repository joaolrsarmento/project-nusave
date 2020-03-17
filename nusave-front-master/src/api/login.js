const axios = require('axios');

const login = async (email) => {
axios
  .get('http://127.0.0.1:8000/api/users/'+localStorage.getItem('token')+'/?format=json')
  .then(resp => resp.data.id);
};

module.exports = { login };
