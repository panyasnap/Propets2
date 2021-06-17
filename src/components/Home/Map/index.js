import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '368px',
    height: '611px'
};

const center = {
    lat: 32.086685,
    lng: 34.789717
};

function MyComponent() {
    return (
        <LoadScript
            googleMapsApiKey="your_key"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
                <></>
            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(MyComponent)
