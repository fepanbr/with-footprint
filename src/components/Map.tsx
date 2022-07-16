import React from 'react';
import GoogleMapReact from 'google-map-react';


export default function Map() {
  const defaultProps = {
    center: {
      lat: 37.201386194163,
      lng: 127.11778019828
    },
    zoom: 18
  };

  return (
    // Important! Always set the container height explicitly
    <div className='map-container' style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGE_MAP_KEY as string }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
      </GoogleMapReact>
    </div>
  );
}
