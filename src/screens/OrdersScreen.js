import React, { useEffect } from 'react'
import { StyleSheet, View, Text, FlatList, Button } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { getOrders } from '../../store/actions/orders.action'

import OrderProduct from '../components/OrderProduct'

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



const OrdersScreen = ({ navigation }) => {

    useEffect(()=> dispatch(getOrders()), [])

    const orders = useSelector(state => state.orders.products)
    console.log('orders.products >>>  ', orders.products)
    

    const dispatch = useDispatch()


    return (
        <View style={styles.container}>
            <FlatList
                style={styles.flatList}
                data={orders}
                renderItem={({item})=>(
                        <OrderProduct orderProduct={item} />
                )}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default OrdersScreen