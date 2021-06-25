import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import Input from '../../../components/Input';
import Select from '../../../components/Select';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 20,
        alignItems:'center',
        flex: 1,
        height: '80vh'
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    input: {
        margin: 2,
    },
    button: {
        color: 'white',
        padding: '10px',
        borderRadius: '1px',
    }
}));

export default () => {
    const classes = useStyles();
    const genreDataSet = [
        {
            id: 'jazz-option',
            value: 'jazz',
            text: 'Jazz'
        },
        {
            id: 'brega-funk-option',
            value: 'brega_funk',
            text: 'BregaFunk'
        }
    ]

    return (
        <div className={classes.root}>
            <Typography color="primary" variant="h5" component="h5">Editar Dados Pessoais</Typography>
            <form className={classes.form}>
                <Input key="cpf" type="text" value="" className={classes.input} placeholder="CPF"/>
                <Input key="birthDate" type="date" value="" className={classes.input} placeholder="Data de Nascimento"/>
                <Input key="postalCode" type="text" value="" className={classes.input} placeholder="CEP"/>
                <Input key="street" style={{width: '47%'}} type="text" value="" className={classes.input} placeholder="Rua"/>
                <Input key="number" style={{width: '30%'}} type="text" value="" className={classes.input} placeholder="Nº"/>
                <Input key="neighborhood" type="text" value="" className={classes.input} placeholder="Bairro"/>
                <Input key="city" style={{width: '47%'}}type="text" value="" className={classes.input} placeholder="Cidade"/>
                <Input key="state" style={{width: '30%'}} type="text" value="" className={classes.input} placeholder="UF"/>
                <Input key="complement" type="text" value="" className={classes.input} placeholder="Complemento"/>
                <Select key="genre" id="genre" className={classes.input} placeholder="Selecione o Gênero" value="" dataset={genreDataSet} />
                <Button className={classes.button} variant="contained" color="primary">
                    Salvar alterações
                </Button>
            </form>
        </div>
    )
}