import React from 'react';
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

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
          <Img fluid={post.featuredImage.imageFile.childImageSharp.fluid} />
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
            featuredImage {
              imageFile {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
              sourceUrl
            }
          }
        }
      }
    }
  }
`
