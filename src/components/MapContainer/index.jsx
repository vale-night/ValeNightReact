import React, { useState } from 'react';
import { Map, InfoWindow, Marker } from 'google-maps-react';
import { SwipeableDrawer } from '@material-ui/core';
import EventDetails from './EventDetails';
React.useLayoutEffect = React.useEffect 

const getEvents = () => {
    const photos = [
        {url: 'https://www.viajali.com.br/wp-content/uploads/2018/07/bares-bh-24.jpg', name: 'Entrada'},
        {url: 'https://www.viajali.com.br/wp-content/uploads/2018/07/bares-bh-24.jpg', name: 'Entrada'}
    ];
    const genres = ['FUNK', 'RAP', 'SERTANEJO'];
    let event = {
        name: 'Barzinho Topson',
        description: 'Barzinho comum, pra tomar uma breja. Com todos os protocolos de segurança pra você se divertir tranquilamente',
        address: 'Rua dos bobos nº 0, Belo Horizonte, MG, Brasil',
        rate: 3,
        mediumPrice: 80.00,
        photos: photos,
        genres: genres,
        position: {lat: -18.9208300, lng: -43.9377800 }
    }
    let event2 = {
        name: 'Baladinha Legal',
        description: 'Uma badalada balada pra curtir os embalos de sábado a noite. Venha e traga seus amigos!',
        address: 'Avenida Afonso Pena, 2000 , Belo Horizonte, MG, Brasil',
        rate: 3,
        mediumPrice: 80.00,
        photos: photos,
        genres: genres,
        position: {lat: -20.9208300, lng: -43.9377800 }
    }

    let event3 = {
        name: 'Jazz Coffee Bar',
        description: 'Venha curtir uma música excelente, tomando um cafezinho para aproveitar',
        address: 'Avenida Afonso Pena, 2500 , Belo Horizonte, MG, Brasil',
        rate: 5,
        mediumPrice: 120.00,
        photos: [{url: 'https://static.wixstatic.com/media/ddf4c2_1727f174912c4a9cadba74533cd116cf~mv2.jpg/v1/fill/w_1000,h_779,al_c,q_90,usm_0.66_1.00_0.01/ddf4c2_1727f174912c4a9cadba74533cd116cf~mv2.jpg', name: 'Armstrong'},
        {url: 'https://dbdzm869oupei.cloudfront.net/img/sticker/preview/14748.png', name: 'Entrada'}],
        genres: ['JAZZ', 'CLÁSSICO'],
        position: {lat: -19.9208300, lng: -43.9377800 }
    }
    return [event, event2, event3]
}

export default ({google}) => {

    console.log(google);
    const events = getEvents();
    console.log(events);
    const [showInfo, setShowInfo] = useState(false);
    const [marker, setMarker] = useState(null);
    const [image, setImage] = useState('https://via.placeholder.com/50x50');
    const [drawerOpened, setDrawerOpened] = useState(false);
    const [drawerEvent, setDrawerEvent] = useState(events[0]);
    console.log(drawerEvent);
    const onMarkerClick = (event, props, marker, e) => {
        setMarker(marker);
        setShowInfo(true);
        setDrawerOpened(true);
        setDrawerEvent(event);
    }

    const onCloseInfo = () => {
        if (showInfo) {
            setShowInfo(false);
            setMarker(null);
            setDrawerOpened(false);
        }
    };

    const mapStyles = {
        map: {
          position: 'absolute',
          width: '100%',
          height: '100%'
        }
      };

    const {lat, long} = {lat: -19.9208300, lng: -43.9377800 }
    return (
        <>
            <Map
                google={google}
                zoom={14}
                style={mapStyles}
                initialCenter={
                    {lat: -19.9208600, lng: -43.9377800 }
                }
            >
            <Marker
                position={{lat: -19.92054300, lng: -43.9377800 }}
                onClick={() => {onMarkerClick(events[0], undefined, true)}}
                name={'Festa'}
                icon = {image}
            />

            <Marker
                position={{lat: -19.9208200, lng: -43.9377800 }}
                onClick={() => {onMarkerClick(events[1], undefined, true)}}
                name={'Festa'}
                icon = {image}
            />

            <Marker
                position={{lat: -19.9328300, lng: -43.9377800 }}
                onClick={() => {onMarkerClick(events[2], undefined, true)}}
                name={'Festa'}
                icon = {image}
            />
                
            </Map>
            <SwipeableDrawer
                anchor="bottom"
                open={drawerOpened}
                onOpen={() => console.log('Abriu aa')}
                onClose={() => {console.log('fechou')}}
            >
                <EventDetails event={drawerEvent} closeDrawerFunction={() => {setDrawerOpened(false)}}/>
            </SwipeableDrawer>
        </>
    );
}