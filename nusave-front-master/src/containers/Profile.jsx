import React, { useState, useEffect } from 'react';
import { Profile } from '../components/Profile';

import { getName } from '../api/user';

export default () => {
  const [name, setName] = useState("Eduardo");

  useEffect(() => {
    getName().then(resp => setName(resp));
  }, []);

  localStorage.setItem('token',5);
  console.log(localStorage.getItem('token'));

  return (
    <Profile 
      name = {name}
    />
  );
};