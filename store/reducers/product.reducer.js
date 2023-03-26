import { computerProducts } from '../../data/computerProducts'
import { SELECT_PRODUCT, FILTER_PRODUCT } from '../actions/product.action'

const PRODUCTS = computerProducts

const initialState = {
    products: PRODUCTS,
    filteredProducts: [],
    selected: null,
}

const productReducer = (state = initialState, action) => {
    switch(action.type){
        case SELECT_PRODUCT:
            return {
                ...state,
                selected: state.filteredProducts.find(
                    product => product.id === action.payload
                )
            }
        case FILTER_PRODUCT:
            return {
                ...state,
                filteredProducts: state.products.find(
                    (product) => product.category === action.payload
                ).products
            }
        default:
            return state
    }
}

export default productReducer