import React, { useState } from 'react';
import { Avatar, Button, makeStyles, Snackbar, Typography } from '@material-ui/core';
import { AddAPhoto } from '@material-ui/icons';
import Input from '../../../components/Input'
import perfilImage from '../../../assets/perfil.png';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 50,
        gap: 50,
        alignItems: 'center',
        alignContent: 'center',
        flex: 1,
        height: '80vh'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        gap: 20
    },
    imageContainer: {
        display: 'flex',
        alignItems: 'flex-end'

    },
    profilePicture: {
        width: 100,
        height: 100
    },
    inputsContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    inputs: {
        width: '100%'
    },
    button: {
        width: '100%',
        padding: 10,
    },
    snackbar: {
        backgroundColor: theme.palette.primary.main
    }
}));

export default () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handlePasswordChangeClick = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div className={classes.root}>
            <form className={classes.form}>
                <Typography color="primary" variant="h4" component="h4">Editar Perfil</Typography>
                <div className={classes.imageContainer}>
                    <Avatar alt="Foto do Perfil" src={perfilImage} className={classes.profilePicture} />
                    <AddAPhoto fontSize="large" />
                </div>
                <div className={classes.inputsContainer}>
                    <Input key="name" className={classes.inputs} type="text" placeholder="Nome Completo" value="" />
                    <Input key="email" className={classes.inputs} type="email" placeholder="E-mail" value="" />
                    <Input key="confirm-email" className={classes.inputs} type="email" placeholder="Confirmar E-mail" value="" />
                    <Button 
                        variant="contained" 
                        color="secondary" 
                        className={classes.button} 
                        style={{backgroundColor: '#361C31'}}
                        onClick={handlePasswordChangeClick}>Alterar senha</Button>
                </div>
            </form>
            <Button variant="contained" color="primary" className={classes.button} style={{width: '80%'}}>Salvar alterações</Button>
            <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                className={classes.snackbar}
                open={open}
                onClose={handleClose}
                autoHideDuration={4000}
                backgroundColor='primary'
                message="Enviado email para reset de senha"
                key='alert' />
        </div>
    )
}