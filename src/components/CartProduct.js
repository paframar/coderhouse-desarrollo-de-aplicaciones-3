import React from 'react'
import { StyleSheet, View, Text, Image, Button } from 'react-native'
import { COLORS } from '../constants/colors'

import { addToCart, removeFromCart } from '../../store/actions/cart.action'
import { useDispatch, useSelector } from 'react-redux'

const styles = StyleSheet.create({
    container:{
        height: 140,
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        paddingHorizontal:'5%',
        paddingVertical:10,
        marginVertical: '2%',
        borderRadius: 8,
        borderTopWidth: 2,
        borderBottomWidth: 4,
        borderRightWidth:4,
        borderLeftWidth:2,
        borderColor: COLORS.DODGER_BLUE,
        backgroundColor: COLORS.WHITE,
    },
    idText:{
        fontSize: 10,
        fontFamily:'open-sans',
        color: COLORS.GRAY,
    },
    productNameText:{
        fontSize: 14,
        fontFamily:'open-sans',
        color: COLORS.BLACK,
    },
    priceText:{
        alignSelf:'center',
        textAlign: 'center',
        fontSize: 13,
        fontFamily:'open-sans',
        backgroundColor: COLORS.DEEP_SKY_BLUE,
        color:COLORS.WHITE_SMOKE,
        width:60,
        height: '20%',
    },
    quantityText:{
        alignSelf:'center',
        textAlign: 'center',
        fontSize: 13,
        fontFamily:'open-sans',
        backgroundColor: COLORS.DODGER_BLUE,
        color: COLORS.GAINSBORO,
        width:60,
        height: '20%',
    },
    image:{
        height:'80%', 
        width: '100%',
        borderWidth:1, 
        borderColor: COLORS.DODGER_BLUE,
        borderRadius: 8,
    },
})

const CartProduct = ({ cartProduct }) => {

    const dispatch = useDispatch()
    const handleAddToCart = () => dispatch(addToCart(cartProduct))
    const handleRemoveFromCart = () => dispatch(removeFromCart(cartProduct))

    return (
        <View style={styles.container}>

            <View style={{flexDirection:'column'}}>
                <Text style={styles.idText} > {`ID: ${cartProduct.id}`} </Text>
                <Image source={{uri:`${cartProduct.image}`}} style={styles.image} />

                <Text style={styles.productNameText} > {`${cartProduct.brand} ${cartProduct.model}`}</Text>
            </View >

            <View style={{flexDirection:'column', width: '15%'}}>
                <Text style={styles.priceText} > {`$ ${cartProduct.price}`} </Text>
                <Text style={styles.quantityText} > {`x ${cartProduct.quantity}`} </Text>
                <Text style={styles.priceText} > {`$ ${cartProduct.price * cartProduct.quantity}`} </Text>


            </View >

            <View style={{flexDirection:'column', alignItems:'center', justifyContent:'center', width: '15%'}}>
                <Button title={'+'} onPress={handleAddToCart} />
                <Button title={'-'} onPress={handleRemoveFromCart} />
            </View>

        </View>
    )
}

export default CartProduct