import { graphql } from 'gatsby';
import { Grid, jsx } from 'theme-ui';
import React from 'react';
import { Layout } from '../components/common/layout';
import { Container, SectionContainer } from '../components/core';
import SEO from '../components/common/seo';
import { Psychologist } from '../components/psychologist';
import { Contact } from '../components/common/contact/contact';

const PsychologistPageTemplate = props => {
  const {
    data: {
      wpgraphql: { page },
    },
  } = props;
  const {
    sections: { content },
  } = page;
  const psychologistObj = content.filter(item => item.psychologist)[0];
  const { psychologist } = psychologistObj;
  return (
    <Layout>
      <SEO title="Psykologene" />
      <Container>
        <SectionContainer
          title={psychologist.psychologist.name}
          subtitle={psychologist.psychologist.proffesion}
          as="h1"
        />
        <Grid
          gap={[null, null, 10, 15]}
          columns={[1, null, '2fr 3fr', '1fr 2fr']}
          sx={{
            mb: [16],
            bg: [null, null, '#fafafa'],
            alignItems: [null, null, null, null, 'center'],
          }}
          key={psychologist.id}
        >
          <Psychologist psychologist={psychologist} isPage />
        </Grid>
      </Container>
      <Contact />
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
