import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { COLORS } from '../constants/colors'

const styles = StyleSheet.create({
    container:{

        width:'90%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center',
        paddingVertical: '2%',
        top: '2%',


        borderRadius: 8,
        borderTopWidth: 2,
        borderBottomWidth: 4,
        borderRightWidth:4,
        borderLeftWidth:2,
        borderColor: COLORS.DODGER_BLUE,
        backgroundColor: COLORS.WHITE,
    },
    total:{
        textAlign: 'center',
        fontSize: 18,
        fontFamily:'open-sans',
        color: COLORS.DODGER_BLUE,

    },
    
})

const CartTotal = ({ total }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.total} > {`TOTAL: $ ${total}`} </Text>
        </View>
    )
}

export default CartTotal