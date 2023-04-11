import React, { useEffect } from 'react'
import { StyleSheet, View, Text, FlatList, Button } from 'react-native'
import { useSelector } from 'react-redux'
import RetailerCard from '../components/RetailerCard'

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

const RetailersScreen = ({ navigation }) => {
    const retailers = useSelector(state => state.retailers.retailers)

    console.log('retailers ', retailers)    

    return (
        <View style={styles.container}>

            <FlatList
                style={styles.flatList}
                data={retailers}
                renderItem={({item})=>(
                        <RetailerCard retailer={item} />
                )}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default RetailersScreen