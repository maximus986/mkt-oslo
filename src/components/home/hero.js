/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'
import React from 'react'
import { graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { Container } from '../common/container'
import styled from '@emotion/styled'
import Image from 'gatsby-image'

export const fragment = graphql`
  fragment HeroSection on WPGraphQL_Page_Sections_Content_Hero {
    desktopDescription: desktopdescription
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
  desktopDescription,
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
  const theme = useThemeUI()
  console.log(theme)
  return (
    <StyledBackgroundImage fluid={fluid} alt="Bg Image" >
      <Container>
        <MobileContent sx={{
          display: ['block, block', 'block', 'none']
        }}>
          <div sx={{ mb: '35px' }} dangerouslySetInnerHTML={{ __html: mobileDescriptionPrimary }} />
          <figure sx={{ mb: '35px', maxWidth: '390px', mx: 'auto' }}>
            <Image fluid={fluid} alt="Alt" />
          </figure>
          <div dangerouslySetInnerHTML={{ __html: mobileDescriptionSecondary }} />
        </MobileContent>
        <DesktopContent sx={{
          display: ['none', 'none', 'block']
        }}>
          <h4 sx={{
            fontSize: 9,
            mb: 0,
            fontFamily: 'body',
            fontWeight: 'body'
          }}>{title}</h4>
          <div
            dangerouslySetInnerHTML={{ __html: desktopDescription }}
            sx={{
              p: {
                fontSize: 5,
                lineHeight: '42px'
              }
            }} />
        </DesktopContent>
      </Container>
    </StyledBackgroundImage>
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

const MobileContent = styled.div`

`
const DesktopContent = styled.div`
  /* h4 {
    font-size: 48px;
    margin-bottom: 0;
    font-weight: 300;
    line-height: 64px;
  } */
`
