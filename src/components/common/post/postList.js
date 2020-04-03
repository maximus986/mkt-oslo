/** @jsx jsx */
import { jsx, Grid } from 'theme-ui'
import { graphql, useStaticQuery } from 'gatsby'
import { Post } from './post'

export const PostList = ({ numberOfPosts }) => {
  const { wpgraphql: { posts } } = useStaticQuery(graphql`
    {
      wpgraphql {
        posts {
          nodes {
            id
            date
            title
            slug
            categories {
              nodes {
                slug
                name
                id
              }
            }
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
  `)
  return (
    < Grid
      gap={[10, null, null, 15]}
      columns={[1, '1fr 1fr', '1fr 1fr 1fr']}
      sx={{
        'article:nth-of-type(3), article: nth-of-type(4), article:nth-of-type(5), article:nth-of-type(6)': {
          display: ['none', null, 'block']
        }
      }}>
      {
        posts.nodes.map((post, i) => {
          if (!numberOfPosts) {
            return <Post key={post.id} post={post} />
          }
          if (numberOfPosts && i <= numberOfPosts - 1) {
            return <Post key={post.id} post={post} />
          }
        })
      }
    </Grid>
  );
}

