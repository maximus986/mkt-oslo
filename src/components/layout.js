/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { Header } from '../components/common/header/header'
import PropTypes from 'prop-types'

export const Layout = ({ children }) => {
  return (
    <>
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

