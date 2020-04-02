/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react';
import styled from '@emotion/styled'
import { HeadingLine } from './headingLine'

export const SectionContainer = ({ title, children }) => {
  return (
    <section sx={{
      py: ['70px', null, '100px']
    }}>
      <div sx={{ textAlign: 'center', mb: 7 }}>
        <SectionTitle sx={{
          mb: 4
        }}>{title}</SectionTitle>
        {title && <HeadingLine />}
      </div>
      {children}
    </section>
  );
}

const SectionTitle = styled.h2`
  text-transform: uppercase;
`



