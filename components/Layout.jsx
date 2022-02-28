import React from 'react';
import Header from './Header.jsx';

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default Layout;
