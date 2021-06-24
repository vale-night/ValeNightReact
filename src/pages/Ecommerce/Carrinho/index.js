import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import InsertCupom from './insertCupom';
import ItemCarrinho from '../components/itemCarrinho';
import { addProductToCart, getCart } from '../../../services/carrinhoApi';

const useStyles = makeStyles((theme) => ({
    root: {
        gap: 20,
        flex: 1,
        height: '80vh',
        justifyContent:'space-around'
    },
    items: {
        width: '80%',
        height: 300,
        overflow: 'auto'
    },
    orderDetails: {
        width: '80%',
        marginTop: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'space-around'
    },
    orderLine: {
        display: 'flex',
        justifyContent:'space-between'
    },
    total: {
        display: 'flex',
        flexDirection: 'column'
    },
    button: {
        width:'35%',
        fontSize: 10
    },
    link: {
        textDecoration: 'none',
        color: '#fff',
        fontSize: 10
    }
}));

export default (theme) => {
    const classes = useStyles();

    const [items, setItems] = useState(getCart());
    if(!items.length) {
        addProductToCart({
            id: Math.random() * 10000,
            amount: 1,
            name: 'Refrigerante',
            price: 4.5,
            category: 'Consumíveis',
            imageUrl: 'https://mercadoeconsumo.com.br/wp-content/uploads/2018/11/coca-cola-reutersregis-duvignau-e1534852966658.jpg'
        });
        setItems(getCart());
    }

    console.log(items);
    let totalItems = items && items.length ? items.map(item => item.amount * item.price).reduce((a, b) => a+b) : 0;
    const [total, setTotal] = useState(totalItems);
    return (
        <Box key="carrinho" className={classes.root} display="flex" flexDirection="column" alignItems="center" justifyContent="flex-end">
            <Typography color="primary" variant="h4" component="h4">Sacola</Typography>
            <div className={classes.items}>
                {items.map((item, index) => (
                    <ItemCarrinho key={`${item}-${index}`}
                        id={item.id}
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
                <div className={classes.orderLine}>
                    <div className={classes.total}>
                        <span style={{color: '#515c6f'}}>Total</span>
                        <span style={{color: '#6c9c36'}}>{`R$ ${total.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`}</span>
                    </div>
                    <Button variant="contained" color="primary" size="small" className={classes.button}>
                        Continuar comprando
                    </Button>
                    <Button variant="contained" color="primary" size="small" className={classes.button}>
                        {/* Quero o estilo do botão mas a funcionalidade do link */}
                        <Link className={classes.link} to="/finalizarPedido">
                            Finalizar pedido
                        </Link>
                    </Button>
                </div>
            </div>
        </Box>
    );
}
