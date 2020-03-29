import React from 'react'
import { graphql } from 'gatsby'

const BehandlingPagesTemplate = props => {
  const { data: {
    wpgraphql: { page }
  }
  } = props
  const { content } = page
  return (
    <div>
      <h1>BEHANDLING TEMPLATE</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
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
