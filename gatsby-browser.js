import React from 'react';
import { LoadScriptNext } from '@react-google-maps/api';

require("typeface-lato")
require("typeface-montserrat")
require("typeface-nothing-you-could-do")

export const wrapRootElement = ({ element }) => (
  <LoadScriptNext
    googleMapsApiKey={process.env.GOOGLE_MAP_API_KEY}
    preventGoogleFontsLoading={false}
  >
    {element}
  </LoadScriptNext>
)

