import React from 'react'
import { StyleSheet, View, Text, Button, TouchableHighlight } from 'react-native'
import {COLORS} from '../colors/colors'

const styles = StyleSheet.create({
    touchableHighlight:{
        borderWidth: 1,
        width:'90%',
        height: '10%',
        justifyContent:'center',
        paddingHorizontal:'5%',
        borderRadius: 8,
        borderColor: COLORS.WHITE_SMOKE,
        backgroundColor: COLORS.DODGER_BLUE,
        marginTop:15,
    },
    text:{
        fontSize: 16,
        fontFamily:'open-sans',
        color: COLORS.WHITE_SMOKE,
    }
})

const CategoryButton = ({ title, onPress }) => {
    return (
            <TouchableHighlight 
                style={styles.touchableHighlight}
                onPress={onPress}
            >
                <Text style={styles.text}>
                    {title} 
                </Text>
            </TouchableHighlight>
    )
}

export default CategoryButton