import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components/layout'
import { Container } from '../components/common/container'

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
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </Container>
    </Layout>
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
