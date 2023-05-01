import React from 'react'
import { Button } from '@react-native-material/core'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { confirmCart, emptyCart } from '../../store/actions/cart.action'
import { getOrders } from '../../store/actions/orders.action'

import CartProduct from '../components/CartProduct'
import CartTotal from '../components/CartTotal'

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        height:'85%',
    },
    flatList:{
        marginTop: '25%',
        width: '90%',
        
    }
})

const CartScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const cartProducts = useSelector(state => state.cart.products)
    const cartTotal = useSelector(state => state.cart.total)
    const userId = useSelector(state => state.auth.userId)

    const handleConfirmCart = () => {
        dispatch(confirmCart(cartProducts, cartTotal, userId))
        dispatch(emptyCart())
        dispatch(getOrders())
    }

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.flatList}
                data={cartProducts}
                renderItem={({item})=>(
                    <CartProduct cartProduct={item} />
                )}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
            />
            <CartTotal total={cartTotal} />
            <View style={{paddingVertical: 20}} >
                <Button title={'Confirmar Carrito'} disabled={cartTotal === 0} onPress={handleConfirmCart} />
            </View>
        </View>
    )
}

export default CartScreen