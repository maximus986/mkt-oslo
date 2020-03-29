import React from 'react'
import { graphql } from 'gatsby'

const PsykologenePagesTemplate = props => {
  const { data: {
    wpgraphql: { page }
  }
  } = props
  const { content } = page
  return (
    <div>
      <h1>Psykologene TEMPLATE</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
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
