import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

// reducers
import CategoryReducer from './reducers/category.reducer'
import ProductReducer from './reducers/product.reducer'
import CartReducer from './reducers/cart.reducer'
import OrdersReducer from './reducers/orders.reducer'
import RetailersReducer from './reducers/retailers.reducer'

const RootReducer = combineReducers({
    categories: CategoryReducer,
    products: ProductReducer,
    cart: CartReducer,
    orders: OrdersReducer,
    retailers: RetailersReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk))
