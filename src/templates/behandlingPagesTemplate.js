/** @jsx jsx */
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import { FaMapMarkerAlt, FaVideo } from 'react-icons/fa';
import { Grid, jsx } from 'theme-ui';
import { Contact } from '../components/common/contact/contact';
import { Layout } from '../components/common/layout';
import SEO from '../components/common/seo';
import { Sidebar } from '../components/common/sidebar';
import { Container, SectionContainer } from '../components/core';
import { Button } from '../components/core/button';
import { parseContentWithLinks } from '../utils/index';

const BehandlingPagesTemplate = props => {
  const {
    data: {
      wpgraphql: { page },
    },
  } = props;

  const {
    content,
    pageTitle,
    uri,
    sections: { sectionContent },
    featuredImage,
  } = page;
  const { title, subtitle } = sectionContent[0];

  const isRootBehandling = uri === 'behandling/';
  return (
    <Layout>
      <SEO title={pageTitle} />
      <Container>
        <SectionContainer title={title} subtitle={subtitle} as="h1" />
        <Grid gap={[7, 10, 4, 15]} columns={[1, 1, '1fr 2fr', '1fr 2fr', '3fr 9fr']}>
          <SidebarContainer show={isRootBehandling}>
            <Sidebar />
          </SidebarContainer>
          <article>
            {/*TODO Add alt*/}
            {featuredImage && (
              <Image
                fluid={featuredImage.imageFile.childImageSharp.fluid}
                alt="Page image"
                sx={{ mb: 11 }}
              />
            )}
            <div>{parseContentWithLinks(content)}</div>
            <div sx={{ mt: 11 }}>
              <Grid
                gap={[10, null, 5, null, 10]}
                columns={[1, 1, 1, 1, '1fr 2fr']}
                sx={{
                  alignItems: ['start', null, null, 'center'],
                }}
              >
                <div
                  sx={{
                    textAlign: ['center'],
                    display: ['none', null, null, null, 'block'],
                  }}
                >
                  <p
                    sx={{
                      fontSize: 0,
                      letterSpacing: '1px',
                      fontWeight: 'bold',
                      fontFamily: 'heading',
                      textTransform: 'uppercase',
                      color: 'mainDark',
                      mb: 2,
                    }}
                  >
                    bestill time
                  </p>
                  <p
                    sx={{
                      fontSize: 3,
                      letterSpacing: '0.7px',
                      fontWeight: 'body',
                      fontFamily: 'body',
                      fontStyle: 'italic',
                      m: 0,
                    }}
                  >
                    Vi tilbyr timer i Oslo og line
                  </p>
                </div>
                <Grid gap={[10, null, 0, 5, 11]} columns={[1, '1fr 1fr']}>
                  <Button
                    variant="internal"
                    icon={<FaVideo />}
                    label="bestill online time"
                    to="/behandling/online-metakognitiv-terapi"
                  />
                  <Button
                    variant="primary"
                    icon={<FaMapMarkerAlt />}
                    label="bestill time i oslo"
                  />
                </Grid>
              </Grid>
            </div>
          </article>
        </Grid>
      </Container>
      <Contact />
    </Layout>
  );
};

export default BehandlingPagesTemplate;

const SidebarContainer = styled.div`
  @media (max-width: 768px) {
    display: ${props => (props.show ? 'block' : 'none')};
  }
`;

export const pageQuery = graphql`
  query GET_BEHANDLING_PAGE($id: ID!) {
    wpgraphql {
      page(id: $id) {
        id
        pageId
        pageTitle: title
        uri
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
        sections {
          sectionContent: content {
            ... on WPGraphQL_Page_Sections_Content_Pagetitle {
              subtitle
              title
            }
          }
        }
        content
      }
    }
  }
`;
