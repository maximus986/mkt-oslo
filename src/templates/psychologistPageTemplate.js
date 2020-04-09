import { graphql } from 'gatsby';
import React from 'react';
import { Layout } from '../components/common/layout';
import { Container } from '../components/core';

const PsychologistPageTemplate = props => {
  const {
    data: {
      wpgraphql: { page },
    },
  } = props;
  const { slug } = page;
  return (
    <Layout>
      <Container>
        <h1>SINGLE psychologist template</h1>
        <h2>{slug}</h2>
        {/* <div>{parseContentWithLinks(content)}</div> */}
      </Container>
    </Layout>
  );
};

export default PsychologistPageTemplate;

export const pageQuery = graphql`
  query GET_PSYCHOLOGIST_PAGE($id: ID!) {
    wpgraphql {
      page(id: $id) {
        id
        slug
        sections {
          content {
            ... on WPGraphQL_Page_Sections_Content_Pagetitle {
              title
            }
            ... on WPGraphQL_Page_Sections_Content_Welcome {
              primaryinfo
              secondaryinfo
            }
            ... on WPGraphQL_Page_Sections_Content_Psychologists {
              psychologist {
                ... on WPGraphQL_Psychologist {
                  id
                  slug
                  psychologist {
                    longdescription
                    name
                    proffesion
                    shortdescription
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
                    largeimage {
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
          }
        }
      }
    }
  }
`;
