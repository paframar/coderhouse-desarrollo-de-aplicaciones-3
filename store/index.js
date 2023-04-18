import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

// reducers
import CategoryReducer from './reducers/category.reducer'
import ProductReducer from './reducers/product.reducer'
import CartReducer from './reducers/cart.reducer'
import OrdersReducer from './reducers/orders.reducer'
import RetailersReducer from './reducers/retailers.reducer'
import UserReducer from './reducers/user.reducer'


import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistReducer, persistStore } from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
}

const rootReducer = combineReducers({
    categories: CategoryReducer,
    products: ProductReducer,
    cart: CartReducer,
    orders: OrdersReducer,
    retailers: RetailersReducer,
    user: UserReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistedStore = persistStore(store);
