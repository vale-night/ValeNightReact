import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import {ReactComponent as SuccessSvg} from '../../../assets/success.svg';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        height: '50vh',
        color: '#515c6f'
    },
    image: {
        width: 200
    }
}));

export default () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <SuccessSvg className={classes.image}/>
            <div style={{textAlign: 'center'}}>
                <Typography color="" variant="h4" component="h4">Pedido Confirmado</Typography>
                <span>Seu pedido foi confirmado com sucesso</span>
            </div>
        </div>
    );
}