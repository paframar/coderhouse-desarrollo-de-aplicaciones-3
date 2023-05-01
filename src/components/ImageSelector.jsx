import React, { useState } from 'react'
import { View, Image, Text, StyleSheet, Alert } from 'react-native'
import { Button } from '@react-native-material/core'
import * as ImagePicker from 'expo-image-picker'
import { COLORS } from '../constants/colors'

const ImageSelector = ({onImage}) => {

    const [pickedUri, setPickedUri] = useState()

    const VerifyPermissions = async () => {
        const cameraPermission = await ImagePicker.requestCameraPermissionsAsync()
        const mediaPermission = await ImagePicker.requestMediaLibraryPermissionsAsync()

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

        setPickedUri(image.assets[0].uri)
        onImage(image.assets[0].uri)
    }

    return (
        <View style={styles.container}>
            <View style={styles.preview}>
                {!pickedUri
                    ? (<Text style={styles.labelText}>No hay imagen seleccionada</Text>)
                    : (<Image style={styles.image} source={{ uri: pickedUri }} />)
                }
            </View>
            <Button  title="Cambiar imagen"  style={styles.button} onPress={handlerTakeImage} />
        </View>
    )
}

export default ImageSelector

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
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
        backgroundColor: COLORS.SKY_BLUE,
    },
    labelText:{
        fontSize: 10,
        fontFamily:'open-sans',
        color:COLORS.GRAY,
    },
})