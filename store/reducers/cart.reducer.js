import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cart.action'

const INITIAL_STATE = {
    products:[],
    total: 0,
}

const CartReducer = (state = INITIAL_STATE, action) => {
    
    switch(action.type){
        case ADD_TO_CART:
            const alreadyInCart = state.products.find((cartProduct)=> cartProduct.product.id === action.payload.id)
            if (alreadyInCart){
                return {
                    ...state,
                    products: state.products.map(cartProduct => cartProduct.product.id === action.payload.id
                        ? {...cartProduct, quantity: cartProduct.quantity + 1}
                        : cartProduct
                    ),
                    total: state.total + action.payload.price
                };
            }else{
                return {
                    ...state,
                    products: [...state.products, {product: action.payload, quantity: 1}],
                    total: state.total + action.payload.price
                };
            }
            
        case REMOVE_FROM_CART:
            return {
                products: state.products.filter((item) => item.id !== action.payload.id),
                total: newstate.total - action.payload.price,                
            }
        default:
            return state;
    }
}

export default CartReducer;