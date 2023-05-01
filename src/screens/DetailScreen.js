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

const DetailScreen = ({ navigation }) => {

    const dispatch = useDispatch()
    const selectedProduct = useSelector(state => state.products.selected)
    const cart = useSelector(state => state.cart.products)


    const handleAddToCart = (selectedProduct) => {
        dispatch(addToCart(selectedProduct))
    }

    return (
        <View style={styles.container}>
            <DetailView item={selectedProduct} />
            <View style={{display:'flex', flexDirection:'row', justifyContent: 'space-between', width: '90%'}}>
                <DetailButton title={' < Products '} onPress={()=>{navigation.navigate('Products')}} /> 
                <DetailButton title={'Agregar al carrito'} onPress={()=>handleAddToCart(selectedProduct)} /> 
            </View>
            
        </View>
    )
}

export default DetailScreen