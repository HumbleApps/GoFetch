import { RootState } from 'store';

export const selectItemsInCart = (state: RootState) => state.cart.cartItems;

export const selectItemsInCartCount = (state: RootState) => state.cart.cartItems.reduce((total, item) => total + item.count, 0);

export const selectTotalAmount = (state: RootState) => state.cart.cartItems.reduce((total, item) => total + item.price * item.count, 0).toFixed(2);
