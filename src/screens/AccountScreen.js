import React, { useState, useEffect } from 'react'
import { Button } from '@react-native-material/core'
import { StyleSheet, View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import { COLORS } from '../constants/colors'

import { useDispatch, useSelector } from 'react-redux'
import { selectRetailer } from '../../store/actions/retailers.action'
import AccountCard from '../components/AccountCard'
import ImageSelector from '../components/ImageSelector'
import { signOut } from '../../store/actions/auth.action'

const AccountScreen = () => {

    const dispatch = useDispatch()
    
    const handleSignOut = () => {
        dispatch(signOut())
    }

    return (
        <View style={{flexDirection: 'column', justifyContent: 'space-between' ,alignItems:'center', paddingTop: '40%', 
        height: '75%'}}>
            <AccountCard/>
            <Button title={'Cerrar Sesion'} style={{backgroundColor: COLORS.DEEP_SKY_BLUE}} onPress={handleSignOut} />
        </View>
    )
}

export default AccountScreen