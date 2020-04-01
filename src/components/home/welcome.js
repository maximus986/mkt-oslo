/** @jsx jsx */
import { jsx, Grid } from 'theme-ui'
import { graphql } from 'gatsby'
import { SectionContainer } from '../common/sectionContainer';
import styled from '@emotion/styled'

export const fragment = graphql`
  fragment WelcomeSection on WPGraphQL_Page_Sections_Content_Welcome {
    sectiontitle
    primaryInfo: primaryinfo
    secondaryInfo: secondaryinfo
    description {
      __typename
      ... on WPGraphQL_Page_Sections_Content_Welcome_Description_Descriptionitem {
        fieldGroupName
        text
        title
      }
    }
  }
`

export const Welcome = ({ sectiontitle, primaryInfo, secondaryInfo, description }) => {
  console.log(description)
  return (
    <SectionContainer title={sectiontitle}>
      <Grid
        gap={[10, null, null, 16]}
        columns={[1, 1, '1fr 1fr']}
        sx={{
          mt: [null, null, null, 17],
          mb: [10, null, null, 15]
        }}>
        <InfoContent dangerouslySetInnerHTML={{ __html: primaryInfo }} sx={{ textAlign: 'justify' }} />
        <InfoContent dangerouslySetInnerHTML={{ __html: secondaryInfo }} sx={{ textAlign: 'justify' }} />
      </Grid>
      <Grid
        gap={[10, null, null, 16]}
        columns={[1, 1, '1fr 1fr 1fr']}>
        {
          description.map((item, i) => (
            <div key={i}>
              <h4 sx={{ fontSize: 5, fontWeight: 'bold', mb: 8, textTransform: 'uppercase' }}>{item.title}</h4>
              <div dangerouslySetInnerHTML={{ __html: item.text }} />
            </div>
          ))
        }
      </Grid>
    </SectionContainer>
  )
}

const InfoContent = styled.div`
  p {
    span {
      font-family: 'Montserrat';
      font-weight: 400;
      float: left;
      font-size: 48px;
      line-height: 40px;
      padding-right: 15px;
      padding-top: 10px;
      color: #323232;
    }
}
`
