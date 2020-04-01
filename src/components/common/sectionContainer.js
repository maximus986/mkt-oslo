/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react';
import styled from '@emotion/styled'
import { Container } from './container'

export const SectionContainer = ({ title, children }) => {
  return (
    <section sx={{
      pt: ['70px', null, '100px']
    }}>
      <Container>
        <div sx={{ textAlign: 'center', mb: 7 }}>
          <SectionTitle sx={{
            mb: 4
          }}>{title}</SectionTitle>
          <SectionLine></SectionLine>
        </div>
        {children}
      </Container>
    </section>
  );
}

const SectionTitle = styled.h2`
  text-transform: uppercase;
`

const SectionLine = styled.span`
  display: inline-block;
  width: 65px;
  height: 1px;
  margin: 0 auto;
  background: #ccc;
  position: relative;
  top: -6px;
  margin-bottom: 4px;
  &:after {
    content: "";
    width: 40px;
    height: 1px;
    display: block;
    background: #ccc;
    margin: 3px auto;
  }
`

