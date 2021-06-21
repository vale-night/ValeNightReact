import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import InsertCupom from './insertCupom';
import ItemCarrinho from './itemCarrinho';

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

const items = [
    {
        amount: 1,
        name: 'Refrigerante',
        price: 4.5,
        category: 'Consumíveis',
        imageUrl: 'https://mercadoeconsumo.com.br/wp-content/uploads/2018/11/coca-cola-reutersregis-duvignau-e1534852966658.jpg'
    },
    {
        amount: 1,
        name: 'Refrigerante',
        price: 4.5,
        category: 'Consumíveis',
        imageUrl: 'https://mercadoeconsumo.com.br/wp-content/uploads/2018/11/coca-cola-reutersregis-duvignau-e1534852966658.jpg'
    },
    {
        amount: 1,
        name: 'Refrigerante',
        price: 4.5,
        category: 'Consumíveis',
        imageUrl: 'https://mercadoeconsumo.com.br/wp-content/uploads/2018/11/coca-cola-reutersregis-duvignau-e1534852966658.jpg'
    },
    {
        amount: 1,
        name: 'Refrigerante',
        price: 4.5,
        category: 'Consumíveis',
        imageUrl: 'https://mercadoeconsumo.com.br/wp-content/uploads/2018/11/coca-cola-reutersregis-duvignau-e1534852966658.jpg'
    },
    {
        amount: 1,
        name: 'Refrigerante',
        price: 4.5,
        category: 'Consumíveis',
        imageUrl: 'https://mercadoeconsumo.com.br/wp-content/uploads/2018/11/coca-cola-reutersregis-duvignau-e1534852966658.jpg'
    }
];

export default (theme) => {
    const classes = useStyles();
    return (
        <Box key="carrinho" className={classes.root} display="flex" flexDirection="column" alignItems="center" justifyContent="flex-end">
            <Typography color="primary" variant="h4" component="h4">Sacola</Typography>
            <div className={classes.items}>
                {items.map((item, index) => (
                    <ItemCarrinho key={`${item}-${index}`}
                        amount={item.amount}
                        name={item.name}
                        price={item.price}
                        category={item.category}
                        imageUrl={item.imageUrl} />
                ))}
            </div>
            <div className={classes.orderDetails}>
                <Typography variant="h5" component="h4">Resumo do pedido</Typography>
                <div className={classes.orderLine}>
                    <span>Subtotal</span>
                    <span>R$ 30,00</span>
                </div>
                <div className={classes.orderLine}>
                    <span>Cupom</span>
                    <span>-R$ 20,00</span>
                </div>
                <div className={classes.orderLine}>
                    <InsertCupom />
                </div>
            </div>
        </Box>
    );
}
