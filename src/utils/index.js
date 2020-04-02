import { config } from '../../config';
import parse from 'html-react-parser'
import { Link } from '../components/common/link'
import React from 'react'

export const createLocalLink = url => {
  if (`#` === url) {
    return null
  }
  return url ? url.replace(config.wordPressUrl, '/') : url
}

export const parseContentWithLinks = (content) => {
  return parse(content, {
    replace: domNode => {
      if (domNode.attribs && domNode.attribs.href) {
        return <Link to={domNode.attribs.href}>{domNode.children[0].data}</Link>
      }
    }
  });
}
