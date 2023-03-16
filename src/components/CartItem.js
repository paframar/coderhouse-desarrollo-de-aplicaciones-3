import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
    }
})

const CartItem = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>CartItem</Text>
        </View>
    )
}

export default CartItem