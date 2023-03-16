import React from 'react'
import { StyleSheet, View, Text, Button, TouchableHighlight } from 'react-native'

import {COLORS} from '../colors/colors'

const styles = StyleSheet.create({
    touchableHighlight:{
        borderWidth: 1,
        width:'90%',
        height: '15%',
        justifyContent:'center',
        paddingHorizontal:'5%',
        borderRadius: 8,
        borderColor: COLORS.WHITE_SMOKE,
        backgroundColor: COLORS.DODGER_BLUE,
        marginTop:15,
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
    )
}

export default CategoryButton