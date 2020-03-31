import React from 'react'
import { Layout } from '../components/layout'
import SEO from '../components/seo'
import { useSiteMetadata } from '../hooks/useSiteMetadata'


const IndexPage = () => {
  const { siteMetadata: { title } } = useSiteMetadata()
  return (
    < Layout>
      <SEO title={`Hjem - ${title}`} />
    </Layout>
  )
}

export default IndexPage
