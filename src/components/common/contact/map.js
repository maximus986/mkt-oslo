/** @jsx jsx */
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { jsx } from 'theme-ui';
import mapStyles from './mapStyles';
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'

// const mapContainerStyle = {
//   height: "400px",
//   width: "800px"
// }

const position = {
  lat: 59.942429,
  lng: 10.703862
}

const center = {
  lat: 59.942515,
  lng: 10.703862,
}



export const Map = () => {
  //   const { staticMap } = useStaticQuery(graphql`
  //   {
  //     staticMap {
  //       mapUrl
  //       childFile {
  //         childImageSharp {
  //           fluid {
  //             ...GatsbyImageSharpFluid_withWebp_tracedSVG
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)
  //   const { mapUrl, childFile: { childImageSharp: { fluid } } } = staticMap
  //   return (
  //     <a href={mapUrl}>
  //       <Image fluid={fluid} alt="Map" />
  //     </a>
  //   )
  // const { isLoaded, loadError } = useLoadScript({
  //   googleMapsApiKey: `${process.env.GOOGLE_MAP_API_KEY}`,
  // }, [])

  return <GoogleMap
    mapContainerStyle={{ width: '100%', height: '610px' }}
    zoom={15}
    center={center}
    options={{ styles: mapStyles }}
  >
    <Marker
      position={position}
    />
  </GoogleMap >
}


