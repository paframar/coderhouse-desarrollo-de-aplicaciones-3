import { StyleSheet } from 'react-native'
import React from 'react'


const styles = StyleSheet.create({
    tabBar:{
        shadowColor: '#7F5SDF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 0.25,
        elevation: 5,
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 90,
    },
    tabBarIcon:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
    },
})

export default styles