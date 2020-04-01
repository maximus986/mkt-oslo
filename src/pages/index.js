import React from 'react'
import { Layout } from '../components/layout'
import SEO from '../components/seo'
import { useSiteMetadata } from '../hooks/useSiteMetadata'
import { graphql } from 'gatsby'
import { Hero } from '../components/home/hero'
import { LearnMore } from '../components/home/learnMore'
import { Quotes } from '../components/home/quotes'
import { About } from '../components/home/about'
import { PsychologistInfo } from '../components/home/psychologistInfo'
import { Welcome } from '../components/home/welcome'

export const PAGE_QUERY = graphql`
  {
    wpgraphql {
      pageBy(uri: "home") {
        sections {
          content {
            __typename
            ...HeroSection
            ...WelcomeSection
            ...PsychologistInfoSection
            ...AboutSection
            ...QuotesSection
            ...LearnMoreSection
          }
        }
      }
      posts(first: 6) {
        nodes {
          date
          title
          slug
          postId
          categories {
            nodes {
              slug
              name
            }
          }
        }
      }
    }
  }
`;


const IndexPage = ({ data }) => {
  const { siteMetadata: { title } } = useSiteMetadata()
  const content = data.wpgraphql.pageBy.sections.content
  return (
    < Layout>
      <SEO title={`Hjem - ${title}`} />
      {content.map((section, i) => {
        const typeName = section.__typename;

        switch (typeName) {
          case 'WPGraphQL_Page_Sections_Content_Hero':
            return <Hero key={i} {...section} />;
          case 'WPGraphQL_Page_Sections_Content_Welcome':
            return <Welcome key={i} {...section} />;
          case 'WPGraphQL_Page_Sections_Content_Pschylogistinfo':
            return <PsychologistInfo key={i} {...section} />;
          case 'WPGraphQL_Page_Sections_Content_About':
            return <About key={i} {...section} />;
          case 'WPGraphQL_Page_Sections_Content_Quotes':
            return <Quotes key={i} {...section} />;
          case 'WPGraphQL_Page_Sections_Content_Learnmore':
            return <LearnMore key={i} {...section} />;
          default:
            return <p>Something went wrong. Please try again.</p>;
        }
      })}
      <h2>BLOGS</h2>
    </Layout>
  )
}

export default IndexPage
