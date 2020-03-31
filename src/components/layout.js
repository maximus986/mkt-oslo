/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { Header } from '../components/common/header/header'
import PropTypes from 'prop-types'

export const Layout = ({ children }) => (
  <>
    <Header />
    <main sx={{
      marginTop: '228px',
      h1: {
        variant: 'text.heading1',
      },
      h4: {
        variant: 'text.heading4',
      },
      h5: {
        variant: 'text.heading5',
      },
      p: {
        variant: 'text.paragraph'
      },
      ul: {
        variant: 'text.list'
      },
      li: {
        variant: 'text.listItem'
      },
      a: {
        variant: 'text.link'
      }
    }}>{children}</main>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

