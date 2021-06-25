import React from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import { Avatar, Button, makeStyles, Typography } from '@material-ui/core';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { AccountCircle, CreditCard, Description, Email, List, RateReview, Stars } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import perfilImage from '../../assets/perfil.png';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 50,
        gap: 50,
        alignItems:'center',
        flex: 1,
        height: '80vh'
    },
    personalInfoContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '80%',
        color: '#515c6f'
    },
    profilePicture: {
        width: 100,
        height: 100
    },
    personalInfo: {
        display: 'flex',
        flexDirection: 'column',
        gap: 3
    },
    button: {
        padding: 10,
        fontSize: 10
    },
    link: {
        textDecoration: 'none',
        color: '#fff',
        fontSize: 10
    },
    menuLink: {
        textDecoration: 'none',
        color: 'inherit'
    },
    menu: {
        boxShadow: '0px 8px 15px 0px #e7eaf0',
        borderRadius: '5px'
    }
}));

export default () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.personalInfoContainer}>
                <Avatar alt="Foto do Perfil" src={perfilImage} className={classes.profilePicture}/>
                {/* <img className={classes.profilePicture} src={perfilImage} alt="Foto do Perfil"/> */}
                <div className={classes.personalInfo}>
                    <Typography variant="h5" component="h5">Naruto</Typography>
                    <span>naruto@konoha.com</span>
                    <Button variant="contained" color="primary" size="small" className={classes.button}>
                        <Link className={classes.link} to="/perfil/editar">
                            Editar Perfil
                        </Link>
                    </Button>
                </div>
            </div>
            <MenuList className={classes.menu}>
                <MenuItem>
                    <ListItemIcon>
                        <List fontSize="large" />
                    </ListItemIcon>
                    <Typography variant="inherit" noWrap>Pedidos</Typography>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <AccountCircle fontSize="large" />
                    </ListItemIcon>
                    <Link className={classes.menuLink} to="/perfil/editarDadosPessoais">
                        <Typography variant="inherit" noWrap>Dados Pessoais</Typography>
                    </Link>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <CreditCard fontSize="large" />
                    </ListItemIcon>
                    <Typography variant="inherit" noWrap>Informações de Pagamento</Typography>
                </MenuItem>
            </MenuList>

            <MenuList className={classes.menu}>
                <MenuItem>
                    <ListItemIcon>
                        <Email fontSize="large" />
                    </ListItemIcon>
                    <Typography variant="inherit" noWrap>Convidar amigos</Typography>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <Description fontSize="large" />
                    </ListItemIcon>
                    <Typography variant="inherit" noWrap>Termos de Uso e Privacidade</Typography>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <Stars fontSize="large" />
                    </ListItemIcon>
                    <Typography variant="inherit" noWrap>Avalie nosso aplicativo!</Typography>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <RateReview fontSize="large" />
                    </ListItemIcon>
                    <Typography variant="inherit" noWrap>Escreva uma sugestão</Typography>
                </MenuItem>
            </MenuList>
        </div>
    );
}


{/* <div className={classes.root}>
            <div className={classes.personalInfoContainer}>
                <img className={classes.profilePicture} src={perfilImage} alt="Foto do Perfil"/>
                <div className={classes.personalInfo}>
                    <Typography variant="h5" component="h5">Naruto</Typography>
                    <span>naruto@konoha.com</span>
                    <Button variant="contained" color="primary" size="small" className={classes.button}>
                        {/* Quero o estilo do botão mas a funcionalidade do link 
                        <Link className={classes.link} to="/editarPerfil">
                            Editar Perfil
                        </Link>
                    </Button>
                </div>
            </div>

            <div className={classes.card}>
                <div className={classes.cardLine}>
                    <List className={classes.cardLineIcon} />
                    <span className={classes.cardLineSpan}>
                        Pedidos
                    </span>
                    <KeyboardArrowRight className={classes.cardLineIcon}/>
                </div>
                <div className={classes.cardLine}>  
                    Uma linha
                </div>
                <div className={classes.cardLine}>
                    Uma linha   
                </div>
            </div>

            <div>
                card 2
            </div>
        </div> */}