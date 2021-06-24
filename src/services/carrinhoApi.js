//Apenas um mock por enquanto, para dar um pouco de vida ao sistema
const DOMAIN_NAME = `@valeNight`

const saveInLocalStorage = (key, item) => {
    sessionStorage.setItem(`${DOMAIN_NAME}/${key}`, JSON.stringify(item));
}

const getInLocalStorage = (key) => {
    return sessionStorage.getItem(`${DOMAIN_NAME}/${key}`)
}

const addProductToCart = (produto) => {
    let cart = getCart();
    cart.push(produto);
    saveInLocalStorage(`cart`, cart);
}

const updateProductAmountInCart = (id, amount) => {
    const cart = getCart();
    cart.forEach(produto => {
        if(produto.id === id) {
            produto.amount = amount;
        }
    });
    saveInLocalStorage(`cart`, cart);
}

const getCart = () => {
    let cart = JSON.parse(getInLocalStorage('cart'));
    if(!cart) {
        cart = [];
    }
    return cart;
}

export {
    getCart,
    addProductToCart,
    updateProductAmountInCart
}
