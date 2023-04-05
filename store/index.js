import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

// reducers
import CategoryReducer from './reducers/category.reducer'
import ProductReducer from './reducers/product.reducer'
import CartReducer from './reducers/cart.reducer'
import OrdersReducer from './reducers/orders.reducer'

const RootReducer = combineReducers({
    categories: CategoryReducer,
    products: ProductReducer,
    cart: CartReducer,
    orders: OrdersReducer,
})

export default createStore(RootReducer, applyMiddleware(thunk))
