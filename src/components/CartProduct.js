import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { COLORS } from '../constants/colors'

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
        width: 220,
        borderWidth:1, 
        borderColor: COLORS.DODGER_BLUE,
        borderRadius: 8,
    },
})

const CartProduct = ({ cartProduct }) => {
    return (
        <View style={styles.container}>

            <View style={{flexDirection:'column'}}>
                <Text style={styles.idText} > {`ID: ${cartProduct.product.id}`} </Text>
                <Image source={{uri:`${cartProduct.product.image}`}} style={styles.image} />

                <Text style={styles.productNameText} > {`${cartProduct.product.brand} ${cartProduct.product.model}`}</Text>
            </View >

            <View style={{flexDirection:'column', width: '15%'}}>
                <Text style={styles.priceText} > {`$ ${cartProduct.product.price}`} </Text>
                <Text style={styles.quantityText} > {`x ${cartProduct.quantity}`} </Text>
                <Text style={styles.priceText} > {`$ ${cartProduct.product.price * cartProduct.quantity}`} </Text>
            </View >

        </View>
    )
}

export default CartProduct