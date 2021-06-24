import { GoogleApiWrapper } from 'google-maps-react';

import MapContainer from '../../components/MapContainer';
import './style.css';


export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_TOKEN
})(MapContainer)