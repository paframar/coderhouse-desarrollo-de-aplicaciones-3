import { URL_API } from "../../src/constants/database.js"

export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export let CONFIRM_CART = 'CONFIRM_CART'
export let EMPTY_CART = 'EMPTY_CART'


export const addToCart = (product) => (
    {
        type: ADD_TO_CART,
        payload: product,
    }
)

export const removeFromCart = (product) => (
    {
        type: REMOVE_FROM_CART,
        payload: product,
    }
)

export const confirmCart = (payload, total, userId) => {
    return async dispatch => {
        try {
            await fetch(`${URL_API}ordenes.json`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    date: new Date(),
                    products: payload,
                    total,
                    userId, 
                }),
            });
            
            dispatch({
                type: CONFIRM_CART,
                payload: true,
            });

        } catch (err) {
            console.log(err.message)    
        }
    }
}

export const emptyCart = () => (
    {
        type: EMPTY_CART,
    }
)