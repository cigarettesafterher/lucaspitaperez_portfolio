import React from 'react';
import Header from './Header';
import Intro from './Intro';

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default Layout;
