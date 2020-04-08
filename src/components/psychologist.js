import Image from 'gatsby-image';
import React from 'react';
import { parseContentWithLinks } from '../utils/index';
import { Button } from './core/button';

export const Psychologist = ({ psychologist: psychologistObj }) => {
  const { psychologist } = psychologistObj
  const {
    shortdescription: shortDescription,
    name,
    avatarimage: { imageFile: { childImageSharp: { fluid } } }
  } = psychologist
  return (
    <>
      <figure>
        <Image fluid={fluid} alt={name} />
      </figure>
      <div>
        <h3>{name}</h3>
        <div>{parseContentWithLinks(shortDescription)}</div>
        <Button variant="primary" label="timebestilling" />
      </div>
    </>
  );
}

