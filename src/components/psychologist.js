/** @jsx jsx */
import { jsx } from 'theme-ui';
import Image from 'gatsby-image';
import React from 'react';
import { parseContentWithLinks } from '../utils/index';
import { Button } from './core/button';
import styled from '@emotion/styled';

export const Psychologist = ({ psychologist: psychologistObj, isPage }) => {
  const { psychologist } = psychologistObj;
  const {
    shortdescription: shortDescription,
    longdescription: longDescription,
    name,
    avatarimage: {
      imageFile: {
        childImageSharp: { fluid: avatarFluid },
      },
    },
    largeimage: {
      imageFile: {
        childImageSharp: { fluid: largeFluid },
      },
    },
  } = psychologist;
  return (
    <>
      <figure
        sx={{
          m: 0,
          mx: ['auto', null, null, 0],
          mb: [10, null, 0],
          paddingLeft: isPage ? [null, null, 10, 10] : [null, null, 10, 0],
          paddingTop: isPage ? [null, null, 10] : [null],
          width: ['100%'],
          maxWidth: '360px',
        }}
      >
        {isPage ? (
          <Image fluid={largeFluid} alt={name} />
        ) : (
          <Image fluid={avatarFluid} alt={name} />
        )}
      </figure>
      <div
        sx={{
          paddingRight: [null, null, 10],
          paddingX: [null, null, 10, 10],
          paddingY: [null, null, 10, 10],
        }}
      >
        {!isPage && (
          <h3
            sx={{
              fontSize: 7,
              fontWeight: 'normal',
              fontFamily: 'heading',
              mb: [6, null, 4, 6],
            }}
          >
            {name}
          </h3>
        )}
        <div sx={{ mb: [10, null, 0, 11] }}>
          {isPage
            ? parseContentWithLinks(longDescription)
            : parseContentWithLinks(shortDescription)}
        </div>
        <Button variant="primary" label="timebestilling" />
      </div>
    </>
  );
};
