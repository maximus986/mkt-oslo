import React from 'react'
import { graphql } from 'gatsby'

export const fragment = graphql`
  fragment QuotesSection on WPGraphQL_Page_Sections_Content_Quotes {
    quote
    quoteauthor
  }
`

export const Quotes = () => {
  return (
    <div>
      Quotes
    </div>
  )
}

