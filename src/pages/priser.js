/** @jsx jsx */
import { jsx, Grid } from 'theme-ui';
import { graphql } from 'gatsby';
import { Contact } from '../components/common/contact/contact';
import { Layout } from '../components/common/layout';
import SEO from '../components/common/seo';
import { SectionContainer, Container } from '../components/core/index';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import { parseContentWithLinks } from '../utils/index';
import { Reservation } from '../components/home/reservation';
import { Button } from '../components/core/button';

export const PAGE_QUERY = graphql`
  {
    wpgraphql {
      page(id: "cGFnZToxMDQy") {
        sections {
          pageHeader: content {
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

const Priser = ({ data }) => {
  const {
    wpgraphql: {
      page: {
        sections: { pageHeader },
        content,
      },
    },
  } = data;
  const {
    siteMetadata: { title: siteTitle },
  } = useSiteMetadata();
  const pageHeaderObj = pageHeader[0];
  const { title, subtitle } = pageHeaderObj;
  console.log(title, subtitle);

  return (
    <Layout>
      <SEO title={`Priser - ${siteTitle}`} />
      <SectionContainer title={title} subtitle={subtitle} />
      <Container>
        <div
          sx={{
            mx: [null, null, null, 'auto'],
            width: [null, null, null, '83%'],
          }}
        >
          <div
            sx={{
              h2: {
                variant: 'text.header2',
                fontSize: [6, 7],
                fontWeight: 'normal',
                fontFamily: 'heading',
                mb: [9],
              },
              hr: {
                my: 12,
                borderWidth: '0.5px',
                borderTopStyle: 'solid',
                borderColor: 'grey100',
              },
            }}
          >
            {parseContentWithLinks(content)}
          </div>
          <div
            sx={{
              hr: {
                my: 12,
                borderWidth: '0.5px',
                borderTopStyle: 'solid',
                borderColor: 'grey100',
              },
            }}
          >
            <Grid
              gap={10}
              columns={[1, '1fr 1fr']}
              sx={{
                bg: 'rgba(250,250,250, 0.62)',
                display: ['grid', 'none', 'none', 'none'],
              }}
            >
              <Button
                variant="internal"
                label="bestill online time"
                to="/behandling/online-metakognitiv-terapi"
              />
              <Button variant="primary" label="bestill time i oslo" />
            </Grid>
            <div sx={{ display: ['none', 'block', 'block'] }}>
              <Reservation />
            </div>
            <hr />
          </div>
        </div>
      </Container>
      <Contact />
    </Layout>
  );
};

export default Priser;
