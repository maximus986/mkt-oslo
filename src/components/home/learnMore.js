import React from 'react'
import { graphql } from 'gatsby'

export const fragment = graphql`
  fragment LearnMoreSection on WPGraphQL_Page_Sections_Content_Learnmore {
    title
    url
  }
`


export const LearnMore = () => {
  return (
    <div>
      Learn more
    </div>
  )
}

