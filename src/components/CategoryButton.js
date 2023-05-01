import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-elements'


import {COLORS} from '../constants/colors'

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'flex-start',
        height: '20%',
        width: '100%',
        borderRadius:20,
        marginTop: 5,
    },
})

const CategoryButton = ({ title, icon, onPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress} style={{alignItems:'center', marginTop:20}}>
                {icon()}
                <Text style={{fontWeight:500, color:COLORS.DODGER_BLUE, margintop :20}}>{title}</Text>
            </TouchableOpacity>
        </View>

    )
}

export default CategoryButton