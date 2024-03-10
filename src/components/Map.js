// Map.js

import React from 'react';
import GoogleMapReact from 'google-map-react'; // Assuming you're using Google Maps

const Marker = ({ text }) => <div>{text}</div>;

const Map = ({ profile }) => {
  const defaultProps = {
    center: {
      lat: profile.latitude,
      lng: profile.longitude
    },
    zoom: 11
  };

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'YOUR_GOOGLE_MAPS_API_KEY' }} // Replace with your Google Maps API key
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker
          lat={profile.latitude}
          lng={profile.longitude}
          text={profile.name}
        />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
