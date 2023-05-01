import { URL_API } from "../../src/constants/database";

export const GET_ORDERS = 'GET_ORDERS';

export const getOrders = (userId) => {
    return async dispatch => {
        try {
            const response = await fetch(`${URL_API}ordenes.json`, {
                method: 'GET',
                headers:{
                    'Content-type':'application/json',
                },
            });

            const result = await response.json();
            const orders = Object.keys(result).map( key => (
                {
                    ...result[key],
                    id: key,
                }
            ))

            dispatch(
                {
                    type: GET_ORDERS,
                    payload: orders,
                }
            )
        } catch (error) {
            console.log(error.message)
        }
    }
}