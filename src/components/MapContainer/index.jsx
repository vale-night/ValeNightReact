import React, { useState } from 'react';
import { Map, InfoWindow, Marker } from 'google-maps-react';

export default ({google}) => {

    console.log(google);

    const [showInfo, setShowInfo] = useState(false);
    const [marker, setMarker] = useState(null);
    const [image, setImage] = useState('https://via.placeholder.com/50x50');

    const onMarkerClick = (props, marker, e) => {
        setMarker(marker);
        setShowInfo(true);
    }

    const onCloseInfo = () => {
        if (showInfo) {
            setShowInfo(false);
            setMarker(null);
        }
    };

    const mapStyles = {
        map: {
          position: 'absolute',
          width: '100%',
          height: '100%'
        }
      };

    return (
        <Map
            google={google}
            zoom={14}
            style={mapStyles}
            initialCenter={
                {
                    lat: -1.2884,
                    lng: 36.8233
                }
            }
        >
            <Marker
                onClick={onMarkerClick}
                name={'Festa'}
                icon = {image}
            />
            <InfoWindow
                marker={marker}
                visible={showInfo}
                onClose={onCloseInfo}
            >
                <div>
                    <h4> { 'Festa' } </h4>
                </div>
            </InfoWindow>
            
        </Map>
    );
}