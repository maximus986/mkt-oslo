import React from 'react'
import { graphql } from 'gatsby'

export const fragment = graphql`
  fragment PsychologistInfoSection on WPGraphQL_Page_Sections_Content_Pschylogistinfo {
    title
  }
`

export const PsychologistInfo = () => {
  return (
    <div>
      Psychologist Info
    </div>
  )
}

