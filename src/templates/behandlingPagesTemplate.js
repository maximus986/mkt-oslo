/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql } from 'gatsby'
import { Layout } from '../components/common/layout'
import { Container } from '../components/core'
import { Grid } from 'theme-ui'
import SEO from '../components/common/seo'
import styled from '@emotion/styled'
import { parseContentWithLinks } from '../utils/index'

const BehandlingPagesTemplate = props => {
  const { data: {
    wpgraphql: { page }
  }
  } = props

  const { content, pageTitle, uri } = page
  const isRootBehandling = uri === 'behandling/'
  return (
    <Layout>
      <SEO title={pageTitle} />
      <Container>
        <Grid
          gap={7}
          columns={[1, 1, '1fr 2fr', '1fr 2fr', '3fr 9fr']}>
          <Aside sx={{ bg: 'yellow' }} show={isRootBehandling}>Sidebar</Aside>
          <div sx={{ bg: '#ccc' }}>{parseContentWithLinks(content)}</div>
        </Grid>
      </Container>
    </Layout>
  );
}

export default BehandlingPagesTemplate;

const Aside = styled.aside`
  @media(max-width: 768px) {
    display: ${props => props.show ? 'block' : 'none'};
  }
`;

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
