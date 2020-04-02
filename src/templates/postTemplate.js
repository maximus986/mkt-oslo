import React from 'react';
import { graphql } from 'gatsby'
import { Layout } from '../components/layout'
import { Container } from '../components/common/container'
import { parseContentWithLinks } from '../utils/index'

const PostTemplate = props => {
  const { data: {
    wpgraphql: { post }
  }
  } = props
  const { content } = post
  return (
    <Layout>
      <Container>
        <h1>POST</h1>
        <div>{parseContentWithLinks(content)}</div>
      </Container>
    </Layout>
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
