import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker'
import './Map.css'

const AnyReactComponent = ({ text, lat, lng }: {text: string; lat: number; lng: number}) => <div style={{width: '100px', height: '100px', backgroundColor: 'white'}}>{text}</div>;

const defaultProps = {
  center: {
    lat: 37.201386194163,
    lng: 127.11778019828
  },
  zoom: 18
};

const Map = () => {

  return (
    // Important! Always set the container height explicitly
    <div className='map-container'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGE_MAP_KEY as string , libraries: ['places']}}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker
          lat={37.201386194163}
          lng={127.11778019828}
        />
      </GoogleMapReact>
    </div>
  );
}


export default Map;