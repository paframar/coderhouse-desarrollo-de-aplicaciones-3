import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Image, Button, TouchableOpacity, FlatList } from 'react-native'
import { COLORS } from '../constants/colors'

import { useDispatch, useSelector } from 'react-redux'
import ImageSelector from './ImageSelector'

const styles = StyleSheet.create({
    container:{
        height: 300,
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'center',
        paddingHorizontal:'2%',
        marginVertical: '2%',
        borderRadius: 8,
        borderTopWidth: 2,
        borderBottomWidth: 4,
        borderRightWidth:4,
        borderLeftWidth:2,
        borderColor: COLORS.NAVY_BLUE,
        backgroundColor: COLORS.WHITE,
        width: '80%',
    },
    text:{
        fontSize: 13,
        fontFamily:'open-sans',
        color:COLORS.NAVY_BLUE,
    },
    labelText:{
        fontSize: 11,
        fontFamily:'open-sans',
        color:COLORS.GRAY,
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

const AccountCard = () => {

    return <View style={[styles.container]}>
            <View style={[{alignItems:'center', justifyContent:'space-between'}]}>
                <ImageSelector onImage={image => console.log(image)} />
                <Text style={[styles.labelText]}>username id</Text>
                <Text style={[styles.text]}>user@name.com</Text>
            </View>
        </View>  
}

export default AccountCard