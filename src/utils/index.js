import { config } from '../../config';
import parse from 'html-react-parser';
import { Link } from '../components/core';
import React from 'react';

export const createLocalLink = url => {
  if (`#` === url) {
    return null;
  }
  return url ? url.replace(config.wordPressUrl, '/') : url;
};

export const parseContentWithLinks = content => {
  if (!content) return;
  return parse(content, {
    replace: domNode => {
      if (domNode.attribs && domNode.attribs.href) {
        return <Link to={domNode.attribs.href}>{domNode.children[0].data}</Link>;
      }
    },
  });
};
