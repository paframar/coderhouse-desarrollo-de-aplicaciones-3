import computerRetailers from '../../data/computerRetailers'
import { SELECT_PRODUCT, FILTER_PRODUCT } from '../actions/product.action'
import { SELECT_RETAILER } from '../actions/retailers.action'

const RETAILERS = computerRetailers

const initialState = {
    retailers: RETAILERS,
    selected: null,
}

const RetailersReducer = (state = initialState, action) => {
    switch(action.type){
        case SELECT_RETAILER:
            return {
                ...state,
                selected: state.retailers.find(
                    retailer => retailer.id === action.payload
                )
            }
        default:
            return state
    }
}

export default RetailersReducer