import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Image, Button, TouchableOpacity, FlatList } from 'react-native'
import { COLORS } from '../constants/colors'


import { useDispatch, useSelector } from 'react-redux'
import { selectRetailer } from '../../store/actions/retailers.action'
import LocationService from '../components/LocationService'
import * as Location from 'expo-location';
import { STATIC_MAP_API_KEY } from '../../keys.js';



const styles = StyleSheet.create({
    container:{
        height: 140,
        flexDirection:'row',
        justifyContent:'flex-start',
        paddingHorizontal:'2%',
        marginVertical: '2%',
        borderRadius: 8,
        borderTopWidth: 2,
        borderBottomWidth: 4,
        borderRightWidth:4,
        borderLeftWidth:2,
        borderColor: COLORS.BLACK,
        backgroundColor: COLORS.WHITE,

    },
    text:{
        width:'100%',
        fontSize: 11,
        fontFamily:'open-sans',
        color:COLORS.NAVY_BLUE,
        right: '20%'

    },
    retailerTitle:{
        width:'100%',
        alignSelf:'center',
        textAlign: 'left',
        fontSize: 14,
        fontFamily:'open-sans',
        color:  COLORS.DODGER_BLUE,
        right: '20%'
    },
})

const RetailerCard = ({retailer}) => {
    
    const { lat, lng } = retailer.location

    const [locationValue, setLocationValue] = React.useState({ lat, lng })

    const dispatch = useDispatch()

    const handleSelectRetailer = () => {
        dispatch(selectRetailer(retailer.id))
    }

    // const getAddress = () => {

    //     // TODO

    //     return async () => {


    //         // const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${locationValue.lat},${locationValue.lng}&key=${STATIC_MAP_API_KEY}`)

    //         const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=-25.3444,131.0369&key=${STATIC_MAP_API_KEY}`)

    //         console.log('RESDATA ====== ', resData)

    
    //         if(!response.ok) throw new Error('Respuesta invalida')
            
    //         const resData = await response.json()

    //         console.log('RESDATA ====== ', resData)
    
    //         if(!resData.results){
    //             throw new Error('No se pudo encontrar la direccion')
    //         }
    //         console.log('getAddress ', resData.results[0].formatted_address)

    //         return resData.results[0].formatted_address
    
    //     }
    // }

    // useEffect(()=>{
    //     const address = getAddress()
    //     console.log('address ', address)
    // }, [])

    return <TouchableOpacity onPress={handleSelectRetailer}>

            <View style={[styles.container]}>
                <View style={{flexDirection:'column', height:'100%', justifyContent:'flex-start',
                            paddingTop: '5%', borderRadius: 20, backgroundColor: COLORS.ALICE_BLUE,
                }}>
                    <LocationService retailerLocation={retailer.location} />
                </View>

                <View style={{flexDirection:'column', justifyContent:'space-evenly', width: 220}}>
                    <Text style={styles.retailerTitle} > {`${retailer.name}`} </Text>
                    <Text style={styles.text} > {`${retailer.phone}`} </Text>
                    <Text style={styles.text} > {`${retailer.address}`} </Text> 
                    <Text style={styles.text} > {`${retailer.email}`} </Text>
                </View > 
            </View>

    </TouchableOpacity>
    
}

export default RetailerCard