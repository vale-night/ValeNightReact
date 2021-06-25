import React from 'react';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { IconButton, Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Button } from '@material-ui/core';
import { addProductToCart } from '../../services/carrinhoApi';
import { HighlightOff } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        gap: 50,
        alignItems:'center',
        flex: 1,
        height: '100%',
        padding: 5,
    },
    photosContainer: {
        display: 'flex',
        height: 100,
        overflowX: 'auto'
    },
    photo: {
        height: 100,
        borderRadius: 20,
        margin: '5px'
    },
    eventInfo: {
        display: 'flex',
        padding: '0px 5px'
    },
    eventNameAndAddressContainer: {
        display: 'flex',
        flexDirection: 'column',
        whiteSpace: "pre",
        color: "#000000",
        letterSpacing: 0,
        lineHeight: 1.2,
        fontWeight: 700,
    },
    price: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '10px'
    },
    addressText: {
        fontSize: 13,
        fontWeight: 1,
        whiteSpace: 'pre-wrap'
    },
    genresContainer: {
        display: 'flex',
        flexDirection: 'column'
    },
    genres: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px'
    },
    genre: {
        boxSizing: "border-box",
        width: 'auto',
        padding: 10,
        height: 46,
        backgroundColor: "#fbdfe9",
        overflow: "visible",
        border: "1px solid #F090B2",
        whiteSpace: "pre",
        fontSize: 25,
        letterSpacing: 0,
        lineHeight: 1.2,
        color: "#F090B2",
        fontWeight: 400,
        fontStyle: "normal",
        fontFamily: `"Staatliches", serif`,
    },
    eventDescription: {
        whiteSpace: "pre-wrap",
        wordWrap: "break-word",
        wordBreak: "break-word",
        letterSpacing: 0,
        lineHeight: 1.2,
        color: "#bababa",
        fontWeight: 400,
    },
    button: {
        color: 'white',
        padding: '10px',
        borderRadius: '1px',
        marginBottom: '3%'
    }
}));

export default ({closeDrawerFunction, event}) => {
    if(!event) {//Temporario
        const photos = [
            {url: 'https://www.viajali.com.br/wp-content/uploads/2018/07/bares-bh-24.jpg', name: 'Entrada'},
            {url: 'https://www.viajali.com.br/wp-content/uploads/2018/07/bares-bh-24.jpg', name: 'Entrada'}
        ];
        const genres = ['FUNK', 'RAP', 'SERTANEJO', 'JAZZ', 'CLÁSSICO'];
        event = {
            name: 'Barzinho Topson',
            description: 'Barzinho comum, pra tomar uma breja. Com todos os protocolos de segurança pra você se divertir tranquilamente',
            address: 'Rua dos bobos nº 0, Belo Horizonte, MG, Brasil',
            rate: 3,
            mediumPrice: 80.00,
            photos: photos,
            genres: genres
        }
    }
    
    const classes = useStyles();

    const onClickBuyHandler = () => {
        addProductToCart({
            id: Math.random() * 10000,
            amount: 1,
            name: `Ingresso para ${event.name}`,
            price: event.mediumPrice,
            category: 'Consumíveis',
            imageUrl: event.photos[0].url
        });
    }

    return (
        <div className={classes.root}>
            <IconButton color="primary" onClick={closeDrawerFunction}>

                <HighlightOff/>
            </IconButton>
            <div className={classes.photosContainer}>
                {event.photos.map(photo => (
                    <Photo photoObj={photo} className={classes.photo}/>
                ))}
            </div>
            <div className={classes.eventInfo}>
                <div className={classes.eventNameAndAddressContainer}>
                    <Typography variant="h5" component="h5">{event.name}</Typography>
                    <span className={classes.addressText}>{event.address}</span>
                </div>
                <div className={classes.ratingAndPriceContainer}>
                    <Rating
                        name="customized-empty"
                        defaultValue={event.rate}
                        precision={0.5}
                        emptyIcon={<StarBorderIcon fontSize="inherit" />} />
                    <div className={classes.price}>
                        <span>Preço médio</span>
                        <span>R$ {event.mediumPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                    </div>
                </div>
            </div>
            <div className={classes.genresContainer}>
                <Typography variant="h5" component="h5">Gênero Musical</Typography>
                <div className={classes.genres}>
                    {event.genres.map(genre => (
                        <GenreCard genre={genre} className={classes.genre}/>
                    ))}
                </div>
            </div>
            <div className={classes.eventDescription}>
                {event.description}
            </div>
            <Button className={classes.button} onClick={onClickBuyHandler} variant="contained" color="primary">
                COMPRAR INGRESSO
            </Button>
        </div>
    )
}


const Photo = ({photoObj, className}) => {
    return (
        <img className={className} src={photoObj.url} alt={photoObj.name}/>
    )
}

const GenreCard = ({genre, className}) => {
    return (
        <div className={className}>
            {genre}
        </div>
    )
}