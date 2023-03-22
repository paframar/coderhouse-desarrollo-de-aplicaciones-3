import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
    }
})

const OrdersScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>OrdersScreen</Text>
        </View>
    )
}

export default OrdersScreen