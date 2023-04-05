import React from 'react'
import { StyleSheet, View, Text, Button, TouchableHighlight } from 'react-native'

import {COLORS} from '../constants/colors'

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
    },
    touchableHighlight:{
        borderWidth: 2,
        width:'90%',
        height: '80%',
        justifyContent:'center',
        paddingHorizontal:'5%',
        borderRadius: 8,
        borderColor: COLORS.DEEP_SKY_BLUE,
        backgroundColor: COLORS.DODGER_BLUE,
    },
    text:{
        fontSize: 18,
        letterSpacing:3,
        fontFamily:'open-sans',
        color: COLORS.WHITE_SMOKE,
        paddingHorizontal: 20,
    }
})

const CategoryButton = ({ title, icon, onPress }) => {
    return (
        <View style={styles.container}>

            <TouchableHighlight 
                style={styles.touchableHighlight}
                onPress={onPress}
                >
                <View style={{flexDirection:'row'}}>
                    {icon()}
                    <Text style={styles.text}>
                        {title} 
                    </Text>
                </View>
            </TouchableHighlight>
        </View>

    )
}

export default CategoryButton