/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql } from 'gatsby'
import { Layout } from '../components/layout'
import { Container } from '../components/common/container'
import { Grid } from 'theme-ui'
import SEO from '../components/seo'

const BehandlingPagesTemplate = props => {
  const { data: {
    wpgraphql: { page }
  }
  } = props

  const { content, pageTitle } = page

  return (
    <Layout>
      <SEO title={pageTitle} />
      <Container>
        <Grid
          gap={7}
          columns={[1, 1, '1fr 2fr', '1fr 2fr', '3fr 9fr']}>
          <aside sx={{ bg: 'yellow' }}>Sidebar</aside>
          <div sx={{ bg: '#ccc' }} dangerouslySetInnerHTML={{ __html: content }} />
        </Grid>
      </Container>
    </Layout>
  );
}

export default BehandlingPagesTemplate;


export const pageQuery = graphql`
  query GET_BEHANDLING_PAGE($id: ID!) {
    wpgraphql {
      page(id: $id) {
        pageTitle: title
        content
        uri
      }
    }
  }
`
