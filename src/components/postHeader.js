/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import React from 'react';
import styled from '@emotion/styled'
import { Container } from './core/index'

export const PostHeader = ({ title, subtitle, children }) => {
  return (
    <Flex sx={{
      flexDirection: 'column',
      justifyContent: 'space-between',
      pt: [13, 14, null, 15, 16],
      pb: [10, 11, null, 11],
      textAlign: 'center',
      bg: '#fafafa',
      mb: [0, null, null, 16]
    }}>
      <Container>
        <div sx={{
          mb: [0, null, 13, 16]
        }}>
          <PostTitle sx={{
            fontSize: [5, null, 7, 10],
            mb: [7, null, null, 10],
            wordWrap: 'break-word',
            lineHeight: '1',
            textTransform: 'uppercase',
            fontWeight: 'medium'
          }}>{title}</PostTitle>
          <h5 sx={{
            fontSize: [4, null, 5],
            color: 'grey400',
            fontWeight: 'medium',
            m: 0
          }}>{subtitle}</h5>
        </div>
        {children}
      </Container>
    </Flex>
  );
}

const PostTitle = styled.h1``




