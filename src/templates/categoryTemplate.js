import React from 'react';
import { graphql } from 'gatsby'

const CategoryTemplate = props => {
  const { data: {
    wpgraphql: { category }
  }
  } = props
  const { name, posts } = category
  return (
    <div>
      <h1>Category: {name}</h1>
      {posts.nodes.map(post => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      ))}
    </div>
  );
}

export default CategoryTemplate;

export const pageQuery = graphql`
  query GET_CATEGORY($id: ID!) {
    wpgraphql {
      category(id: $id) {
        name
        slug
        id
        posts {
          nodes {
            title
            id
            content
          }
        }
      }
    }
  }
`
