import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Image, Button, TouchableOpacity, FlatList } from 'react-native'
import { COLORS } from '../constants/colors'

import { useDispatch, useSelector } from 'react-redux'
import { selectRetailer } from '../../store/actions/retailers.action'
import AccountCard from '../components/AccountCard'
import ImageSelector from '../components/ImageSelector'

const AccountScreen = () => {

    return (
        <View style={{flexDirection: 'column', alignItems:'center', paddingTop: '40%'}}>
            <AccountCard/>
        </View>
    )
}

export default AccountScreen