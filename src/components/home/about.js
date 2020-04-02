/** @jsx jsx */
import { jsx, Grid } from 'theme-ui'
import { graphql } from 'gatsby'
import { SectionContainer } from '../common/sectionContainer'
import { Container } from '../common/container'
import { HeadingLine } from '../common/headingLine'
import Image from 'gatsby-image'
import { parseContentWithLinks } from '../../utils/index'


export const fragment = graphql`
  fragment AboutSection on WPGraphQL_Page_Sections_Content_About {
    description
    title
    image {
      sourceUrl
      imageFile {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 246) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  }
`

export const About = ({ description, title, image: { imageFile: { childImageSharp: { fluid } } } }) => {
  return (
    <SectionContainer title={title}>
      <Container>
        <Grid
          gap={[8, null, 10, 15]}
          columns={[1, 1, '1fr 1fr']}
          sx={{ alignItems: [null, null, 'start'] }}
        >
          <figure sx={{ my: 0, maxWidth: '500px', maxHeight: '246px' }}>
            <Image fluid={fluid} alt="Some Image" /> {/* TODO Add alt */}
          </figure>
          <div>{parseContentWithLinks(description)}</div>
        </Grid>
      </Container>
    </SectionContainer>
  )
}

