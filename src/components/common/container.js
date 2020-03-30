/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react';

export const Container = ({ children }) => {
  return (
    <div sx={{
      width: ['90%', null, null, null, '90%', '100%'],
      maxWidth: [null, null, null, null, '1120px', '1280px'],
      mx: 'auto',
    }}>
      {children}
    </div>
  );
}

