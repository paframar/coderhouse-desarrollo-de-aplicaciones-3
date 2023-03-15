import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import DetailView from '../components/DetailView'
import BuyButton from '../components/BuyButton'

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        height:'70%',
        marginTop: '20%',
    }
})

const DetailScreen = ({ route }) => {
    return (
        <View style={styles.container}>
            <DetailView item={route.params.item} />
            <BuyButton /> 
        </View>
    )
}

export default DetailScreen