import React from 'react'
import { graphql } from 'gatsby'

export const fragment = graphql`
  fragment AboutSection on WPGraphQL_Page_Sections_Content_About {
    descrtiption
    title
    image {
      sourceUrl
      imageFile {
        childImageSharp {
          fluid {
            src
          }
        }
      }
    }
  }
`

export const About = () => {
  return (
    <div>
      About
    </div>
  )
}

