import React from 'react'
import { StyleSheet, View, Text, Button, Image, TouchableHighlight, TouchableOpacity } from 'react-native'

import {COLORS} from '../constants/colors'


const styles = StyleSheet.create({
    container:{
        height: '95%',
        width:'90%',
        borderWidth:2,
        borderColor:COLORS.DODGER_BLUE,
        backgroundColor:COLORS.WHITE,
        borderRadius: 8,
        alignItems:'center',
        justifyContent:'space-around',

    },
    container2:{
        justifyContent:'center',
        alignItems:'center',
        width:'80%',
        backgroundColor: COLORS.SKY_BLUE,
        borderWidth:2,
        borderColor:COLORS.DODGER_BLUE,
        borderRadius: 8,
    },
    touchable:{
        borderWidth: 1,
        width:'100%',
        justifyContent:'center',
        paddingHorizontal:'5%',
        borderRadius: 8,
        borderColor: COLORS.DODGER_BLUE,
        borderTopWidth: 2,
        borderBottomWidth: 4,
        borderRightWidth:4,
        borderLeftWidth:2,
        backgroundColor: COLORS.WHITE,
        paddingVertical:10,
    },
    text:{
        fontSize: 24,
        fontFamily:'open-sans',
        color: COLORS.WHITE,
    },
    image:{
        height: 300,
        width:'80%',
        borderColor:COLORS.DEEP_SKY_BLUE,
        borderRadius: 8,
    }
})

const DetailView = ({item}) => {
    const { model, brand, image, price, onPress } = item
    return (
        <View style={styles.container}>
            <Image 
                source={{uri:`${image}`}}
                style={styles.image} 
                resizeMode="contain" 
            />
            <View style={styles.container2}>
                <Text style={styles.text}>
                    {`${model}`}
                </Text>
                <Text style={styles.text}>
                    {`${brand}`}
                </Text>
                <Text style={styles.text}>
                    {`$ ${price}`}
                </Text>
            </View>
        </View>
    )
}

export default DetailView