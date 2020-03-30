import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components/layout';

const BehandlingPagesTemplate = props => {
  const { data: {
    wpgraphql: { page }
  }
  } = props
  const { content } = page
  return (
    <Layout>
      <h1>BEHANDLING TEMPLATE</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Layout>
  );
}

export default BehandlingPagesTemplate;


export const pageQuery = graphql`
  query GET_BEHANDLING_PAGE($id: ID!) {
    wpgraphql {
      page(id: $id) {
        title
        content
        uri
      }
    }
  }
`
