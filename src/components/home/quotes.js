/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { graphql } from 'gatsby'
import { Container } from '../core'

export const fragment = graphql`
  fragment QuotesSection on WPGraphQL_Page_Sections_Content_Quotes {
    quote
    quoteAuthor: quoteauthor
  }
`

export const Quotes = ({ quote, quoteAuthor }) => {
  return (
    <div sx={{
      py: ['70px', null, '100px'],
      bg: 'secondary',
      color: 'white',

    }}>
      <Container>
        <Flex sx={{
          placeItems: 'center',
          flexDirection: 'column',
          width: [null, null, null, '80%', null, '100%'],
          mx: 'auto'
        }}>
          <div
            dangerouslySetInnerHTML={{ __html: quote }}
            sx={{
              fontStyle: 'italic',
              fontSize: 5,
              letterSpacing: '1.5px'
            }}
          />
          <div
            dangerouslySetInnerHTML={{ __html: quoteAuthor }}
            sx={{
              color: 'grey200',
              fontFamily: 'author',
              fontSize: '30px',
              letterSpacing: '2px',
              alignSelf: 'flex-end',
              mr: ['50px', null, null, '395px']
            }}
          />
        </Flex>
      </Container>
    </div>
  )
}

