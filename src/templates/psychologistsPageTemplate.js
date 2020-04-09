/** @jsx jsx */
import { graphql } from 'gatsby';
import { Grid, jsx } from 'theme-ui';
import { Layout } from '../components/common/layout';
import SEO from '../components/common/seo';
import { Container, SectionContainer } from '../components/core';
import { Psychologist } from '../components/psychologist';
import { parseContentWithLinks } from '../utils';

const PsychologistsPagesTemplate = props => {
  const {
    data: {
      wpgraphql: { page },
    },
  } = props;
  const {
    sections: { content },
  } = page;
  const pageTitle = content.filter(item => item.title)[0].title;
  const intro = content.filter(item => item.primaryinfo)[0];
  const psychologists = content.filter(item => item.psychologist);
  // console.log(psychologists)

  return (
    <Layout>
      <SEO title="Psykologene" />
      <Container>
        <SectionContainer title={pageTitle} as="h1" />
        <Grid gap={[null, null, 10, 15]} columns={[1, null, '1fr 1fr']}>
          <div>{parseContentWithLinks(intro.primaryinfo)}</div>
          <div>{parseContentWithLinks(intro.secondaryinfo)}</div>
        </Grid>
        <div>
          {psychologists.map(({ psychologist }) => {
            return (
              <Grid
                gap={[null, null, 10, 15]}
                columns={[1, null, '1fr 1fr']}
                key={psychologist.id}
              >
                <Psychologist psychologist={psychologist} />
              </Grid>
            );
          })}
        </div>
      </Container>
    </Layout>
  );
};

export default PsychologistsPagesTemplate;

export const pageQuery = graphql`
  query GET_PSYCHOLOGISTS_PAGE($id: ID!) {
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
