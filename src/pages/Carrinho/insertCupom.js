import React from 'react';
import { makeStyles} from '@material-ui/core';
import Input from '../../components/Input';

const useStyles = makeStyles((theme) => ({
    root: {
        gap: 20
    },
    items: {
        width: '80%',
        height: 300,
        overflow: 'auto'
    },
    orderDetails: {
        width: '80%',
        marginTop: theme.spacing(2)
    },
    orderLine: {
        display: 'flex',
        justifyContent:'space-between'
    }
}));

export default ({cupom}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Input id="cupom-input" 
                placeholder="Informe o cupom"
                type="text"/>
            <span>Aplicar</span>
        </div>
    )
}