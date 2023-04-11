import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { Button } from '@react-native-material/core'

import { COLORS as colors}  from '../constants/colors.js'

import MapPreview from './MapPreview'


const styles = StyleSheet.create({
        container: {
            borderRadius: 8,
            width: '75%',
            height: '5%',
            
        },
        button:{
            backgroundColor: colors.DARK_SLATE_GRAY,
            marginTop: 20,
        },
        preview: {
            width: '100%',
            height: 100,
            marginBottom: 10,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: colors.PERIWINKLE,
            borderRadius: 25,
            backgroundColor: colors.MEDIUM_SPRING_GREEN,
          },
          image: {
            width: '100%',
            height: '100%'
          },
          actions: {
            flexDirection: 'row',
            justifyContent: 'space-around',
          }
  });
  

const LocationService = ({ retailerLocation } ) => {

    const { lat, lng } = retailerLocation
    const [location, setLocation] = useState({ lat, lng })

    const handleGeoLocation = async (position) => {
        const hasPermission = await verifyGeolocationPermission()
        if (!hasPermission) return
        const { lat, lng } = retailerLocation
        setLocation({ lat, lng })
    }

    const verifyGeolocationPermission = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync()
        if (status !== 'granted'){
            alert('No se puede acceder a la ubicacion.')
            return false
        }
        return true
    }

    useEffect(async()=>{
        handleGeoLocation()
    }, [])

    return (
        <View style={styles.container}>
            <View>
                <MapPreview mapStyle={styles.preview} location={location} >
                    <Text> Esperando ubicación... </Text>
                </MapPreview>
            </View>
            <Button 
                title={'Obtener location'} 
                style={styles.button} 
                onPress={handleGeoLocation}
            />
        </View>
    );
}

export default LocationService




