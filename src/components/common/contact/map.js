/** @jsx jsx */
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import { jsx } from 'theme-ui';


export const Map = () => {
  const { staticMap } = useStaticQuery(graphql`
    {
      staticMap {
        mapUrl
        childFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  `)
  const { mapUrl, childFile: { childImageSharp: { fluid } } } = staticMap
  return (
    <a href={mapUrl}>
      <Image fluid={fluid} alt="Map" />
    </a>
  )
}
