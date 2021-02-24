export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const REMOVE_PRODUCT_TO_CART = 'REMOVE_PRODUCT_TO_CART';

export const addProductToCart = (product) => {
    return {
        type: ADD_PRODUCT_TO_CART,
        data: product
    }
}
export const removeProductFromCart = (product) => {
    return {
        type: REMOVE_PRODUCT_TO_CART,
        data: product
    }
}