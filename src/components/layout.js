import React from 'react'
import { Header } from '../components/common/header/header'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'


import './layout.css'

export const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  console.log(data)
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  )
}

const Main = styled.main`
  margin-top: 228px;
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

