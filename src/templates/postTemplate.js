import React from 'react';
import { graphql } from 'gatsby'

const PostTemplate = props => {
  const { data: {
    wpgraphql: { post }
  }
  } = props
  const { content } = post
  return (
    <div>
      <h1>POST</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default PostTemplate;

export const pageQuery = graphql`
  query GET_POST($id: ID!) {
    wpgraphql {
      post(id: $id) {
        title
        content
        uri
      }
    }
  }
`
