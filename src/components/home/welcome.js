import React from 'react'
import { graphql } from 'gatsby'

export const fragment = graphql`
  fragment WelcomeSection on WPGraphQL_Page_Sections_Content_Welcome {
    primaryinfo
    description {
      __typename
      ... on WPGraphQL_Page_Sections_Content_Welcome_Description_Descriptionitem {
        fieldGroupName
        text
        title
      }
    }
    secondaryinfo
  }
`

export const Welcome = () => {
  return (
    <div>
      Welcome
    </div>
  )
}

