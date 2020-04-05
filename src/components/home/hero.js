/** @jsx jsx */
import { jsx, Grid } from 'theme-ui'
import { graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { Container } from '../core'
import styled from '@emotion/styled'
import Image from 'gatsby-image'
import { parseContentWithLinks } from '../../utils/index'
import { Reservation } from './reservation'
import { Button } from '../core/button'
import { FaMapMarkerAlt, FaVideo } from "react-icons/fa";

export const fragment = graphql`
  fragment HeroSection on WPGraphQL_Page_Sections_Content_Hero {
    description: desktopdescription
    title
    mobileDescriptionPrimary: mobiledescriptionprimary
    mobileDescriptionSecondary: mobiledescriptionsecondary
    image {
      imageFile {
        childImageSharp {
          fluid{
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      sourceUrl
    }
  }
`

export const Hero = ({
  description,
  title,
  mobileDescriptionPrimary,
  mobileDescriptionSecondary,
  image: {
    imageFile:
    { childImageSharp:
      { fluid }
    }
  }
}) => {
  return (
    <StyledBackgroundImage fluid={fluid} alt="Bg Image" >
      <Container>
        <MobileContent sx={{
          display: ['block, block', 'block', 'none'],
          pt: 7
        }}>
          <div sx={{ mb: '35px' }} dangerouslySetInnerHTML={{ __html: mobileDescriptionPrimary }} />
          <figure sx={{ mb: '35px', maxWidth: '390px', mx: 'auto' }}>
            <Image fluid={fluid} alt="Alt" /> {/* TODO Add alt */}
          </figure>
          <Grid gap={10}
            columns={[1, '1fr 1fr']}
            sx={{
              mb: 11,
              px: 4,
              py: 7,
              bg: 'rgba(250,250,250, 0.62)',
            }}>
            <Button variant="internal" icon={<FaVideo />} label="bestill online time" to="/behandling/online-metakognitiv-terapi" />
            <Button variant="primary" icon={<FaMapMarkerAlt />} label="bestill time i oslo" />
          </Grid>
          <div dangerouslySetInnerHTML={{ __html: mobileDescriptionSecondary }} />
        </MobileContent>
        <DesktopContent sx={{
          display: ['none', 'none', 'block'],
        }}>
          <h4 sx={{
            fontSize: 10,
            mb: 0,
            fontFamily: 'body',
            fontWeight: 'body'
          }}>{title}</h4>
          <div sx={{
            p: {
              fontSize: 5,
              lineHeight: '42px'
            }
          }}>{parseContentWithLinks(description)}</div>
          <div sx={{
            width: ['80%', null, null, '90%'],
            mx: 'auto',
            px: 10,
            py: 12,
            bg: 'rgba(250,250,250, 0.62)',
            mt: [null, null, null, 10]
          }}>
            <Reservation textWidth="50" buttonsWidth="50" />
          </div>
        </DesktopContent>
      </Container>
    </StyledBackgroundImage >
  )
}

const StyledBackgroundImage = styled(BackgroundImage)`
  min-height: 87vh;
  background-color: rgba(255,255,255, 0.82); // TODO Maybe this could come from WP!
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 1 !important;
  width: 100%;
  display: flex;
  place-items: center;
`;

const MobileContent = styled.div``
const DesktopContent = styled.div``

