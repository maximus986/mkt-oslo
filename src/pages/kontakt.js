/** @jsx jsx */
import { jsx, Grid } from 'theme-ui';
import { Layout } from '../components/common/layout';
import SEO from '../components/common/seo';
import { SectionContainer, Container } from '../components/core/index';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import {
  ContactInfo,
  Form,
  Map,
  ArrivalInformation,
} from '../components/common/contact/index';

const Kontakt = () => {
  const {
    siteMetadata: { title: siteTitle },
  } = useSiteMetadata();
  return (
    <Layout>
      <SEO title={`Kontakt - ${siteTitle}`} />
      {/* NOTE: Title and subtitle are hardcoded because there is no blog page in WP */}
      {/* NOTE: All the fetching and styling of the blogs are done in PostList component */}
      <SectionContainer title="kontakt" />
      <Container>
        <Grid columns={[1, '1fr 1fr']} gap={[0]}>
          <ContactInfo />
          <Form />
        </Grid>
        <Grid columns={[1, '1fr 1fr']} gap={[0]} sx={{ pb: [10, null, null, 15, 16] }}>
          <div sx={{ maxHeight: '625px', overflow: 'hidden' }}>
            <Map />
          </div>
          <div sx={{ order: [-1, 1], maxHeight: '625px' }}>
            <ArrivalInformation />
          </div>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Kontakt;
