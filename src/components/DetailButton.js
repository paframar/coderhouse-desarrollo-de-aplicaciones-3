import React from 'react'
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native'
import { COLORS } from '../constants/colors'


const styles = StyleSheet.create({
    touchableHighlight:{
        borderWidth: 2,
        height: 50,
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:'5%',
        borderRadius: 8,
        borderColor: COLORS.DODGER_BLUE,
        backgroundColor: COLORS.WHITE,
        marginTop:15,
    },
    text:{
        fontSize: 16,
        fontFamily:'open-sans',
        color: COLORS.DODGER_BLUE,
    }
})

const DetailButton = ({ title, onPress }) => {
    return (
            <TouchableOpacity 
                style={styles.touchableHighlight}
                onPress={onPress}
                >
                <Text style={styles.text}>
                    {title}
                </Text>
            </TouchableOpacity>
    )
}

export default DetailButton