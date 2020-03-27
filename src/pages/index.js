import { graphql, Link } from "gatsby"
import Img from 'gatsby-image'
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"


export const data = graphql`
  {
    wpgraphql {
      postBy(slug: "triggertanker-hva-er-de-og-hvordan-kan-de-hjelpe-deg") {
        slug
        featuredImage {
          imageFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          sourceUrl
        }
      }
    }
  }
`;


const IndexPage = ({ data }) => {
  return (
    < Layout >
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>{data.wpgraphql.postBy.slug}</p>
      <Img fluid={data.wpgraphql.postBy.featuredImage.imageFile.childImageSharp.fluid} />
      <Link to="/page-2/">Go to page 2</Link>
    </Layout >
  )
}

export default IndexPage
