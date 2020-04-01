/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { Header } from '../components/common/header/header'
import PropTypes from 'prop-types'
import { Global } from '@emotion/core'

export const Layout = ({ children }) => {
  return (
    <>
      <Global styles={{
        '--webkit::scrollbar': {
          width: '8px'
        },
        '--webkit::scrollbar-button': {
          width: '8px',
          height: '5px'
        },
        '--webkit::scrollbar-thumb': {
          background: '#888',
          border: 'none',
          transition: '0.3s linear',
        },
        '-moz::selection, ::selection': {
          background: '#323232'
        },
        '::selection': {
          color: '#fff',
        }
      }} />
      <Header />
      <main sx={{
        marginTop: '125px',
      }}>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

