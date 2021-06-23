import React from 'react';
import { Button, makeStyles} from '@material-ui/core';
import Input from '../../../components/Input';

const useStyles = makeStyles((theme) => ({
    root: {
        gap: 10,
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%'
    },
    input: {
        width: '100%'
    }, 
    button: {
        flex: 1
    }
}));

export default ({cupom}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Input id="cupom-input" 
                className={classes.input}
                placeholder="Informe o cupom"
                type="text"/>
            <Button color="primary"
                className={classes.button}>
                Aplicar
            </Button>
        </div>
    )
}