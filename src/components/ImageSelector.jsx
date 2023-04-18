import React, { useState, useEffect } from 'react'
import { View, Button, Image, Text, StyleSheet, Alert } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import { COLORS } from '../constants/colors'

const ImageSelector = ({onImage}) => {

    const [pickedUri, setPickedUri] = useState()

    useEffect(()=>{
        console.log('pickedUri ', pickedUri)
    })

    const VerifyPermissions = async () => {
        const cameraPermission = await ImagePicker.requestCameraPermissionsAsync()
        const mediaPermission = await ImagePicker.requestMediaLibraryPermissionsAsync()

        console.log('cameraPermission ', cameraPermission.status)
        console.log('mediaPermission ', mediaPermission.status)

        if(cameraPermission.status !== 'granted' || mediaPermission.status !== 'granted') {
            Alert.alert('No se han concedido permisos.')
            return false
        }
        return true
    }

    const handlerTakeImage = async () => {
        const isCameraOk = await VerifyPermissions()
        if (!isCameraOk) return
        
        const image = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [16,9],
            quality: 0.8,
        })

        console.log(image.assets)
        setPickedUri(image.assets[0].uri)
        onImage(image.assets[0].uri)
    }

    return (
        <View style={styles.container}>
            <View style={styles.preview}>
                {!pickedUri
                    ? (<Text>No hay imagen seleccionada...</Text>)
                    : (<Image style={styles.image} source={{ uri: pickedUri }} />)
                }
            </View>
            <View style={styles.button}>
                <Button  title="Cambiar imagen" onPress={handlerTakeImage} />
            </View>
        </View>
    )
}

export default ImageSelector

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        justifyContent: 'space-between',
        alignItems:'center',
    },
    preview: {
        height: 50,
        width: '100%',
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: COLORS.NAVY_BLUE,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 20,
    },
    button:{
        top:100,
    },
})