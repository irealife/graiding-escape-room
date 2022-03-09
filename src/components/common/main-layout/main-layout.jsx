import { Header, Footer } from 'components/common/common';
import React from 'react';
import PropTypes from 'prop-types';

function MainLayout({children}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
