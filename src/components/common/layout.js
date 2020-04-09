/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { Header } from './header/header';
import PropTypes from 'prop-types';
import { Footer } from './footer';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main
        sx={{
          marginTop: '125px',
        }}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
