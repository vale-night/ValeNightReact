import { makeStyles } from '@material-ui/core';
import React from 'react';
import perfilJpgImage from '../../assets/perfil.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems:'center',
        flex: 1,
        height: '80vh'
    },
    personalInfo: {
        display: 'flex',
        
    }
}));

export default () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.personalInfo}>
                Parte de cima
            </div>

            <div>
                card 1
            </div>

            <div>
                card 2
            </div>
        </div>
    );
}