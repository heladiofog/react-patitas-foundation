import React from 'react';
import Header from './Header';
import Home from '../pages/Home';
import Footer from './Footer';

const Layout = props => (
  <div className="Layout">
    <Header />
    <Home />
    <Footer />
  </div>
);

export default Layout;