/** @jsx jsx */
import { jsx, Grid } from 'theme-ui';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import { HeadingLine } from '../../core';

export const ArrivalInformation = () => {
  return (
    <div
      sx={{
        textAlign: 'center',
        bg: 'grey',
        p: [10, null, null, null, 14, 15],
        height: '100%',
      }}
    >
      <h2 sx={{ fontSize: [7, 5, null, 7], fontFamily: 'heading' }}>
        Arrival information
      </h2>
      <HeadingLine />
      <Info>
        <Title>The entrance</Title>
        <Text>
          The entrance can be found on the left side of Baker Hansen just around the
          corner (near the subway station)
        </Text>
      </Info>
      <Info>
        <Title>By car</Title>
        <Text>There is a possibility for payed parking in front of the building</Text>
      </Info>
      <Info>
        <Title>Public transport</Title>
        <Text>The building is located directly by the metro line 1 at Vindern</Text>
      </Info>
    </div>
  );
};

const Info = styled.div`
  font-size: 15px;
  margin-bottom: 20px;
`;

const Title = styled.h5`
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: 28px;
  font-weight: 700;
  &:after {
    content: '';
    width: 30px;
    height: 1px;
    background: #b4b4b4;
    display: block;
    margin: 5px auto;
  }
`;

const Text = styled.p`
  margin: 5px 0 0;
  font-style: italic;
  font-weight: 400;
`;
