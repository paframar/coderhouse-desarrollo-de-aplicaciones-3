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
    message:{
        width:'100%',
        fontSize: 11,
        fontFamily:'open-sans',
        color:COLORS.GRAY,
        left: '20%'
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

const RetailerCard = ({retailer, permissions, verifyPermissions}) => {
    
    const { lat, lng } = retailer.location

    const [locationValue, setLocationValue] = React.useState({ lat, lng })
    

    const dispatch = useDispatch()

    const handleSelectRetailer = () => {
        dispatch(selectRetailer(retailer.id))
    }

    return <TouchableOpacity onPress={handleSelectRetailer}>

            <View style={[styles.container]}>
                <View style={{flexDirection:'column', height:'100%', justifyContent:'flex-start',
                            paddingTop: '5%', borderRadius: 20, backgroundColor: COLORS.ALICE_BLUE,
                }}>
                    {permissions ? (
                        <LocationService retailerLocation={retailer.location} />

                    ):(
                        <View style={{width:'60%', height:'100%', alignItems:'center'}}>
                            <Text style={styles.message}>
                                No se puede acceder a la ubicación. 
                            </Text>
                            <Text style={styles.message}>
                                Favor de conceder permisos.
                            </Text>
                        </View>
                    )}
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