import React from 'react';
import styled from 'styled-components';
import GoogleAuth from './GoogleAuth';

const Header = styled.div`
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: blue;
  padding: 8px;
  margin-bottom: 8px;
`;

const AppTitle = styled.h1`
  color: white;
`
export default () => (
  <Header>
    <AppTitle>Hawes Magic Bike App</AppTitle>
    <GoogleAuth />
  </Header>
);