import { ADD_TO_CART, REMOVE_FROM_CART, CONFIRM_CART, EMPTY_CART } from '../actions/cart.action'

const INITIAL_STATE = {
    products:[],
    total: 0,
}

const sumTotal = (list) => list
    .map(item => item.quantity * item.price)
    .reduce((a, b) => a + b, 0);

const CartReducer = (state = INITIAL_STATE, action) => {
    
    switch(action.type){
        case ADD_TO_CART:
            
            let updatedAddCart = [];

            if (state.products.find( product => product.id === action.payload.id)){
                updatedAddCart = state.products.map( product => {
                    if (product.id === action.payload.id) product.quantity ++;
                    return product;
                });

            } else {
                updatedAddCart = [...state.products, { ...action.payload, quantity: 1}]
            }

            return {
                ...state,
                products: updatedAddCart,
                total: sumTotal(updatedAddCart)
            }
            
        case REMOVE_FROM_CART:
            const productToRemove = state.products.filter(product => product.id === action.payload.id)[0];
            let updatedRemoveCart = [];

            console.log('REMOVE_FROM_CART productToRemove ', productToRemove)

            if (productToRemove.quantity === 1){
                updatedRemoveCart = state.products.filter(product => product.id !== action.payload.id);
            } else {
                updatedRemoveCart = state.products.map( product => {
                    if (product.id === action.payload.id) product.quantity --;
                    return product; 
                })
            }
            
            console.log('REMOVE_FROM_CART updatedRemoveCart ', updatedRemoveCart)

            return {
                ...state,
                products: updatedRemoveCart,
                total: sumTotal(updatedRemoveCart),                
            }
        case CONFIRM_CART:
            return {
                ...state,
            }
        
        case EMPTY_CART:
            return INITIAL_STATE; 

        default:
            return state;
    }
}

export default CartReducer;