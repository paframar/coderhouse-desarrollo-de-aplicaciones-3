import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
    }
})

const CartScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>CartScreen</Text>
        </View>
    )
}

export default CartScreen