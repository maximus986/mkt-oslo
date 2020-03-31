/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components/layout'
import { Container } from '../components/common/container'
import { Grid } from 'theme-ui'

const BehandlingPagesTemplate = props => {
  const { data: {
    wpgraphql: { page }
  }
  } = props
  const { content } = page

  return (
    <Layout>
      <Container>
        <Grid
          gap={7}
          columns={[1, 1, '1fr 1fr', '1fr 2fr']}>
          <aside>Sidebar</aside>
          <div dangerouslySetInnerHTML={{ __html: content }} />
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
        title
        content
        uri
      }
    }
  }
`
