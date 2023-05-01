import React, { useEffect, useState } from 'react'
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

    const dispatch = useDispatch()
    const userId = useSelector(state => state.auth.userId)
    
    useEffect(()=> {
        dispatch(getOrders())
    }, [orders])
    
    const orders = useSelector(state => state.orders.products)
    const userOrders = orders.filter((order)=> order.userId === userId)
    console.log('userOrders ', userOrders)
    console.log('len ', userOrders.length )

    return (
        <View style={styles.container}>
            { userOrders.length > 0 
            
                ? (
                    <FlatList
                        style={styles.flatList}
                        data={userOrders}
                        renderItem={({item})=>(
                                <OrderProduct orderProduct={item} />
                        )}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                    />
                ):(
                    <Text>Aún tienes ordenes.</Text>   
                )
            }

        </View>
    )
}

export default OrdersScreen