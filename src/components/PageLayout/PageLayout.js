import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './PageLayout.css';

const PageLayout = ({ children }) => {
  return (
    <div className="page-layout">
      <Header />
      <div className="page-content">{children}</div>
      <Footer />
    </div>
  );
};

export default PageLayout;
