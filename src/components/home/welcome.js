/** @jsx jsx */
import { jsx, Grid } from 'theme-ui'
import { graphql } from 'gatsby'
import { SectionContainer } from '../common/sectionContainer';
import { Container } from '../common/container';
import styled from '@emotion/styled'

export const fragment = graphql`
  fragment WelcomeSection on WPGraphQL_Page_Sections_Content_Welcome {
    sectiontitle
    primaryInfo: primaryinfo
    secondaryInfo: secondaryinfo
    desktopDescription: desktopdescription {
      __typename
      ... on WPGraphQL_Page_Sections_Content_Welcome_Desktopdescription_Desktopdescriptionitem {
        text
        title
      }
    }
    mobileDescription: mobiledescription {
      __typename
      ... on WPGraphQL_Page_Sections_Content_Welcome_Mobiledescription_Mobiledescriptionitem {
        text
        title
      }
    }
  }
`

export const Welcome = ({ sectiontitle, primaryInfo, secondaryInfo, desktopDescription, mobileDescription }) => {
  return (
    <SectionContainer title={sectiontitle}>
      <Container>
        <Grid
          gap={[10, null, null, 16]}
          columns={[1, 1, '1fr 1fr']}
          sx={{
            mt: [null, null, null, 17],
            mb: [10, null, null, 15]
          }}>
          <InfoContent dangerouslySetInnerHTML={{ __html: primaryInfo }} sx={{ textAlign: [null, null, 'justify'] }} />
          <InfoContent dangerouslySetInnerHTML={{ __html: secondaryInfo }} sx={{ textAlign: [null, null, 'justify'] }} />
        </Grid>
        <Grid
          gap={[10, null, null, 16]}
          columns={[1, 1, '1fr 1fr 1fr']}>
          {
            desktopDescription.map((item, i) => (
              <div key={i} sx={{
                display: ['none', 'none', 'block']
              }}>
                <h4 sx={{ fontSize: 5, fontWeight: 'bold', mb: 8, textTransform: 'uppercase' }}>{item.title}</h4>
                <div dangerouslySetInnerHTML={{ __html: item.text }} sx={{ p: { m: 0 } }} />
              </div>
            ))
          }
          {
            mobileDescription.map((item, i) => (
              <div key={i} sx={{
                display: ['block, block', 'block', 'none']
              }}>
                <h4 sx={{ fontSize: 5, fontWeight: 'bold', mb: 8, textTransform: 'uppercase' }}>{item.title}</h4>
                <div dangerouslySetInnerHTML={{ __html: item.text }} />
              </div>
            ))
          }
        </Grid>
      </Container>
    </SectionContainer>
  )
}

const InfoContent = styled.div`
  p::first-letter {
    font-family: 'Montserrat';
    font-weight: 400;
    float: left;
    font-size: 48px;
    line-height: 40px;
    padding-right: 15px;
    padding-top: 10px;
    color: #323232;
  }
`
