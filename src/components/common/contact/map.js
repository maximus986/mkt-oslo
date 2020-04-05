/** @jsx jsx */
import { jsx } from 'theme-ui';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';


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
    <div sx={{ height: '100%', }}>
      <a
        href={mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          border: 'none',
          '&:hover': {
            bg: 'transparent',
            border: 'none'
          }
        }}>
        <Image fluid={fluid} alt="Map" sx={{ height: '100%', }} />
      </a>
    </div>
  )
}
