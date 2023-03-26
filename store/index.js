import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

// reducers
import CategoryReducer from './reducers/category.reducer'
import ProductReducer from './reducers/product.reducer'

const RootReducer = combineReducers({
    categories: CategoryReducer,
    products: ProductReducer
})

export default createStore(RootReducer)
