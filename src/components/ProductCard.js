import React from 'react'
import { StyleSheet, View, Text, Button, Image, TouchableHighlight, TouchableOpacity } from 'react-native'
import {COLORS} from '../constants/colors'

const styles = StyleSheet.create({
    container:{
        height: 200,
        width:'100%',
    },
    container2:{
        justifyContent:'center',
        alignItems:'center',
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
        fontSize: 16,
        fontFamily:'open-sans',
        color: COLORS.DODGER_BLUE,
    },
    image:{
        height: 100,
        width:200,
    }
})

const ProductCard = ({ model, brand, image, price, onPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.touchable}
                onPress={onPress}
            >
                <View style={styles.container2}>
                    <Image 
                        source={{uri:`${image}`}}
                        style={styles.image} 
                        resizeMode="contain" 
                    />
                    <Text style={styles.text}>
                        {`${brand} · ${model}`}
                    </Text>


                    
                </View>
            </TouchableOpacity>
            
        </View>
    )
}

export default ProductCard