/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react';
import styled from '@emotion/styled'
import { HeadingLine } from './index'

export const SectionContainer = ({ title, subtitle, children }) => {
  return (
    <section sx={{
      py: ['70px', null, '100px']
    }}>
      <div sx={{ textAlign: 'center', mb: 7 }}>
        <h2 sx={{
          mb: 4,
          textTransform: 'uppercase'
        }}>{title}</h2>
        {title && <HeadingLine />}
        <h5 sx={{
          fontSize: '14px',
          color: 'grey400',
          letterSpacing: '2px',
          textTransform: 'uppercase'
        }}>{subtitle}</h5>
      </div>
      {children}
    </section>
  );
}

const SectionTitle = styled.h2`
  text-transform: uppercase;
`



