import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, FlatList, Button } from 'react-native'
import { useSelector } from 'react-redux'
import RetailerCard from '../components/RetailerCard'
import * as Location from 'expo-location';


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
    const [permissions, setPermissions] = useState(null)

    const verifyGeolocationPermission = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync()
        if (status !== 'granted'){
            alert('No se puede acceder a la ubicacion.')
            setPermissions(false)

            return false
        }
        setPermissions(true)
        return true
    }

    useEffect(async()=>{
        const hasPermission = await verifyGeolocationPermission()
        if (permissions !== hasPermission) {
            setPermissions(hasPermission)
        }
    }, [])   

    return (
        <View style={styles.container}>

            <FlatList
                style={styles.flatList}
                data={retailers}
                renderItem={({item})=>(
                        <RetailerCard retailer={item} permissions={permissions} verifyPermissions={verifyGeolocationPermission} />
                )}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default RetailersScreen