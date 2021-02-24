import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_TO_CART } from "actions/cartActions";

type InitialState = {
    cartItems: any[];
}
const initialState: InitialState = {
    cartItems: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART: {
            let { cartItems } = state;
            const { count } = action.data;

            if (count > 1) {
                const presentItem = cartItems.filter(item => item.id === action.data.id);

                if (presentItem.length > 0) {
                    presentItem[0].count = count;
                }
            } else {
                cartItems = [...state.cartItems, action.data]
            }
            return {
                ...state,
                cartItems: [...cartItems]
            }
        }
        case REMOVE_PRODUCT_TO_CART: {
            let { cartItems } = state;
            const { count } = action.data;

            if (count === 0) {
                cartItems = cartItems.filter(item => item.id !== action.data.id);
            }
            else {
                const alreadyItem = cartItems.filter(item => item.id === action.data.id);
                if (alreadyItem.length > 0) {
                    alreadyItem[0].count = count;
                }
            }
            return {
                ...state,
                cartItems: [...cartItems]
            }
        }

        default:
            return state;
    }
}

export default cartReducer;