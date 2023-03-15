import React from 'react'
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native'
import {COLORS} from '../colors/colors'

const styles = StyleSheet.create({
    touchableHighlight:{
        borderWidth: 2,
        width:'90%',
        height: '10%',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:'5%',
        borderRadius: 8,
        borderColor: COLORS.DODGER_BLUE,
        backgroundColor: COLORS.WHITE,
        marginTop:15,
    },
    text:{
        fontSize: 16,
        fontFamily:'open-sans',
        color: COLORS.DODGER_BLUE,
    }
})

const BuyButton = ({ onPress }) => {
    return (
            <TouchableOpacity 
                style={styles.touchableHighlight}
                onPress={onPress}
            >
                <Text style={styles.text}>
                    Comprar
                </Text>
            </TouchableOpacity>
    )
}

export default BuyButton