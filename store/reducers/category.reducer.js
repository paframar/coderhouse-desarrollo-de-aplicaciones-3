import {computerProducts } from '../../data/computerProducts'
import { SELECT_CATEGORY } from '../actions/category.action'

const CATEGORIES = []

computerProducts.map((computerProduct) =>{
    CATEGORIES.push(computerProduct.category)
})

const initialState = {
    categories: CATEGORIES,
    selected: null,
}

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_CATEGORY:
            return { ...state, selected: action.payload}
        default:
            return state
    }
}

export default categoryReducer