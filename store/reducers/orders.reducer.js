import { GET_ORDERS } from "../actions/orders.action";

const initialState = {
    products: [],
};

const OrdersReducer = ( state = initialState, action) => {
    switch (action.type){
        case GET_ORDERS:
            return {
                ...state,
                products: action.payload,
            };
        default:
            return state;
    }
}

export default OrdersReducer