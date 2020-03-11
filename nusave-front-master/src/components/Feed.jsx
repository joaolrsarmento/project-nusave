import React from 'react';
import styled from 'styled-components';
import Post from './Post';

const LocalFilter = styled.div`
  color: #81259D;
  font-size: 18px;
  margin: 0 6% 24px 6%;
  border-bottom: 1px solid #ccc;
`;

export const Feed = () => (
  <div>
    <LocalFilter>Região: São Paulo</LocalFilter>
    <Post />
  </div>
);