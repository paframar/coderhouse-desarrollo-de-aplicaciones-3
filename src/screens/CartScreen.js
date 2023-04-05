import React from 'react'
import { StyleSheet, View, Text, FlatList, Button } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { confirmCart, emptyCart } from '../../store/actions/cart.action'

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

    const handleConfirmCart = () => {
        dispatch(confirmCart(cartProducts, cartTotal))
        dispatch(emptyCart())
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
                <Button title={'Confirmar'} onPress={handleConfirmCart} />
            </View>
        </View>
    )
}

export default CartScreen