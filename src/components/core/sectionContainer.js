/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import styled from '@emotion/styled';
import { HeadingLine } from './index';

export const SectionContainer = ({ title, subtitle, as, children }) => {
  return (
    <section
      sx={{
        py: [10, null, null, 15, 16],
      }}
    >
      <div sx={{ textAlign: 'center', mb: 7 }}>
        <div sx={{ mb: [8, null, null, 12, 16] }}>
          <SectionTitle
            as={as}
            sx={{
              mb: 4,
              textTransform: 'uppercase',
              wordWrap: 'break-word',
            }}
          >
            {title}
          </SectionTitle>
          {title && <HeadingLine />}
          {subtitle && (
            <h5
              sx={{
                fontSize: '14px',
                color: 'grey400',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                m: 0,
              }}
            >
              {subtitle}
            </h5>
          )}
        </div>
      </div>
      {children}
    </section>
  );
};

const SectionTitle = styled.h2``;
