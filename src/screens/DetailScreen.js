import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import DetailView from '../components/DetailView'
import DetailButton from '../components/DetailButton'

import { useSelector, useDispatch } from 'react-redux'
import { selectProduct } from '../../store/reducers/product.reducer'

import { addToCart } from '../../store/actions/cart.action'
import { CartReducer } from '../../store/reducers/cart.reducer'

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        height:'70%',
        marginTop: '20%',
    }
})

const DetailScreen = ({ route }) => {

    const dispatch = useDispatch()
    const selectedProduct = useSelector(state => state.products.selected)
    const cart = useSelector(state => state.cart.products)


    const handleAddToCart = (selectedProduct) => {
        dispatch(addToCart(selectedProduct))
        console.log('cart ', cart)
    }
    console.log(selectedProduct)

    return (
        <View style={styles.container}>
            <DetailView item={selectedProduct} />
            <DetailButton onPress={()=>handleAddToCart(selectedProduct)} /> 
        </View>
    )
}

export default DetailScreen