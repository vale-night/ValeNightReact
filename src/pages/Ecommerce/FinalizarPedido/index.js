import React from 'react';
import { Button, makeStyles, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import masterCardLogo from '../../../assets/mastercard-logo.svg'
import {ReactComponent as PriceTagSvg} from '../../../assets/priceTag.svg';
import ItemCarrinho from '../components/itemCarrinho';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        gap: 20,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        flex: 1,
        height: '80vh'
    },
    header: {
        color: '#515C6F', 
        alignSelf: 'flex-start'
    },
    section: {
        width: '80%',
        display: 'flex',
        flexDirection: 'column'
    },
    paymentMethod: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
    },
    paymentMethodImage: {
        height: 'auto',
        width: '50px'
    },
    codigoPromocional: {
        display: 'flex',
        color: '#ff6969',
        alignItems: 'center',
        gap: 10
    },
    priceTagImage: {
        width: 24
    },
    items: {
        height: '150px',
        overflow: 'auto',
        width: '80%'
    },
    finishSection: {
        display: 'flex',
        width: '80%',
        justifyContent: 'space-between'
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

export default () => {
    const classes = useStyles();
    const [total, setTotal] = useState(10);

    return (
            <div className={classes.root}>
                <Typography color="primary" variant="h4" component="h4">Finalizar Pedido</Typography>
                <div className={classes.section}>
                    <span className={classes.header}>ENTREGA</span>
                    <div className={classes.endereco}>
                        Entregar para Naruto, no escritório do Hokage, Aldeia de Konoha, País do Fogo
                    </div>
                </div>
                <div className={classes.section}>
                    <span className={classes.header}>MÉTODO DE PAGAMENTO</span>
                    <div className={classes.paymentMethod}>
                        <img src={masterCardLogo} className={classes.paymentMethodImage}/>
                        <span>MasterCard final **00</span>
                    </div>
                </div>
                <div className={classes.section}>
                    <span style={{color: '#515c6f'}}>
                        Mensagem ao promotor (Opcional)
                    </span>
                </div>
                <div className={classes.section}>
                    <div className={classes.codigoPromocional}>
                        <PriceTagSvg stroke='#ff6969' className={classes.priceTagImage} />
                        Adicionar código promocional
                    </div>
                </div>
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
                <div className={classes.finishSection}>
                    <div className={classes.total}>
                        <span style={{color: '#515c6f'}}>Total</span>
                        <span style={{color: '#6c9c36'}}>{`R$ ${total.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`}</span>
                    </div>
                    <Button variant="contained" color="primary" size="small" className={classes.button}>
                        {/* Quero o estilo do botão mas a funcionalidade do link */}
                        <Link className={classes.link} to="/finalizarPedido">
                            Finalizar pedido
                        </Link>
                    </Button>
                </div>
            </div>
    )
}