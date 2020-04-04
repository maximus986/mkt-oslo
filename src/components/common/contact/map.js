/** @jsx jsx */
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { jsx } from 'theme-ui';
import mapStyles from './mapStyles';

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
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: `${process.env.GATSBY_GOOGLE_MAP_API_KEY}`,
  }, [])

  const renderMap = () => {
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

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>
  }

  return isLoaded ? renderMap() : 'Loading...'
}
