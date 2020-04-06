/** @jsx jsx */
import { jsx, Flex, Grid, useThemeUI } from 'theme-ui'
import { graphql } from 'gatsby'
import { Layout } from '../components/common/layout'
import { Container } from '../components/core'
import { parseContentWithLinks } from '../utils/index'
import SEO from '../components/common/seo'
import format from 'date-fns/format'
import { Link } from 'gatsby'
import Image from 'gatsby-image'
import { PostHeader } from '../components/postHeader'
import { Button } from '../components/core/button'
import { FaMapMarkerAlt, FaVideo, FaFacebookSquare, FaTwitter, FaLinkedin } from "react-icons/fa";
import styled from '@emotion/styled'
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from "react-share";

const DATE_FORMAT = 'dd/LL/yyyy'

const PostTemplate = props => {
  const { theme: { colors } } = useThemeUI()
  const { data: {
    wpgraphql: {
      post, psychologistBy
    }
  },
    location
  } = props
  const {
    content,
    author,
    categories,
    date,
    featuredImage: {
      imageFile: {
        childImageSharp: {
          fluid: postImageFluid
        }
      }
    },
    sections: {
      content: postIntro
    }
  } = post
  const { psychologist: {
    avatarimage: {
      imageFile: {
        childImageSharp: {
          fluid: authorImageFluid }
      }
    }
  }
  } = psychologistBy
  const { title, subtitle } = postIntro[0]
  const shareUrl = location.href

  return (
    <Layout>
      <SEO title={title} />
      <PostHeader title={title} subtitle={subtitle}>
        <Flex sx={{
          display: ['none', null, 'flex'],
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 2,
          fontWeight: 'bold',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          color: 'grey700',
        }}>
          <span sx={{
            mr: 7
          }}>{format(new Date(date), DATE_FORMAT)}</span>
          <div>
            {
              categories.nodes.map(({ id, slug, name }) => (
                <Link
                  key={id}
                  to={`/blogg/category/${slug}`}
                  sx={{
                    color: 'mainDark',
                    mr: 7,
                    border: 'none',
                    '&:hover': {
                      bg: 'transparent',
                      color: 'grey700',
                    }
                  }}
                >
                  {`#${name}`}
                </Link>
              ))
            }
          </div>
          <span>BY {author.name}</span>
        </Flex>
      </PostHeader>
      <div sx={{
        width: [null, null, '70%', '70%', '60%', '50%'],
        mx: 'auto',
        pb: [10, null, 14, 17]
      }}>
        <div sx={{
          width: [null, null, '90%', null, 'null', '100%'],
          maxWidth: [null, null, null, '1120px', 'null', '1280px'],
          mx: 'auto',
        }}>
          {/* TODO Add alt */}
          <figure sx={{
            mb: [null, null, 11],
            mt: 0,
            mx: 0,
            position: 'relative'
          }}>
            <Image fluid={postImageFluid} alt="Blog img" sx={{
              maxHeight: '500px'
            }} />
            <Flex sx={{
              fontSize: 8,
              flexDirection: 'column',
              position: 'absolute',
              top: '50%',
              right: '-70px',
              transform: 'translateY(-50%)',
              display: ['none', 'none', 'flex']
            }}>
              <FacebookShareButton url={shareUrl} title={title}>
                <FaFacebookSquare sx={{ transition: 'link', '&:hover': { color: '#4267B2' } }} />
              </FacebookShareButton>
              <TwitterShareButton url={shareUrl} title={title}>
                <FaTwitter sx={{ transition: 'link', '&:hover': { color: '#1DA1F2' } }} />
              </TwitterShareButton>
              <LinkedinShareButton url={shareUrl} title={title}>
                <FaLinkedin sx={{ transition: 'link', '&:hover': { color: '#0e76a8' } }} />
              </LinkedinShareButton>
            </Flex>
          </figure>
          <Grid gap={10}
            columns={[1, '1fr 1fr']}
            sx={{
              mb: 11,
              px: 7,
              py: [10, 13],
              bg: '#fafafa',
              display: [null, null, 'none']
            }}>
            <Button variant="internal" icon={<FaVideo />} label="bestill online time" to="/behandling/online-metakognitiv-terapi" />
            <Button variant="primary" icon={<FaMapMarkerAlt />} label="bestill time i oslo" />
          </Grid>
        </div>
        <Container>
          <Content sx={{ mb: 10 }} {...{ colors }}>{parseContentWithLinks(content)}</Content>
          <Grid
            columns={[1, 1, '3fr 9fr']}
            gap={[5, null, 10]}
            sx={{
              alignItems: ['start'],
              textAlign: ['center', null, 'left']
            }}>
            <figure sx={{
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              mx: 'auto',
              my: 0
            }}>
              <Image fluid={authorImageFluid} alt={author.name} sx={{ borderRadius: '50%' }} />
            </figure>
            <div>
              <span sx={{
                textTransform: 'uppercase',
                fontSize: 0,
                letterSpacing: '1px',
                color: 'grey500',
                display: 'block',
                mb: 5
              }}>Author</span>
              <h3 sx={{
                fontSize: 5,
                fontWeight: 'normal',
                mb: 5
              }}>{author.name}</h3>
              <p>{parseContentWithLinks(author.description)}</p>
            </div>
          </Grid>
        </Container>
      </div>
    </Layout >
  );
}

export default PostTemplate;

const Content = styled.div`
  border-bottom: 1px solid ${props => props.colors.grey150};
`


export const pageQuery = graphql`
  query GET_POST($id: ID!) {
    wpgraphql {
      post(id: $id) {
        uri
        author {
          id
          name
          description
        }
        date
        categories(first: 2) {
          nodes {
            id
            slug
            name
          }
        }
        slug
        featuredImage {
          sourceUrl
          imageFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
        content
        sections {
          content {
            ... on WPGraphQL_Post_Sections_Content_Pagetitle {
              subtitle
              title
            }
          }
        }
      }
      psychologistBy(psychologistId: 3918) {
        psychologist {
          avatarimage {
            sourceUrl
            imageFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
