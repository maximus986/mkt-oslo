import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components/common/layout'
import { Container } from '../components/core'
import { parseContentWithLinks } from '../utils/index'

const PsykologenePagesTemplate = props => {
  const { data: {
    wpgraphql: { page }
  }
  } = props
  const { content } = page
  return (
    <Layout>
      <Container>
        <h1>Psykologene TEMPLATE</h1>
        <div>{parseContentWithLinks(content)}</div>
      </Container>
    </Layout >
  );
}

export default PsykologenePagesTemplate;


export const pageQuery = graphql`
  query GET_PSYKOLOGENE_PAGE($id: ID!) {
    wpgraphql {
      page(id: $id) {
        title
        content
        uri
      }
    }
  }
`
