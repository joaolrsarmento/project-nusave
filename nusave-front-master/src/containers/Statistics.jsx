import React, { useState, useEffect } from 'react';
import { Statistics } from '../components/Statistics';

import { getStatistics } from '../api/user';

export default () => {

  return (
    <Statistics getStatistics={getStatistics} />
  );
};