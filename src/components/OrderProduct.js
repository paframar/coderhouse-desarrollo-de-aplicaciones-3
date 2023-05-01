import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, Button, TouchableOpacity, FlatList } from 'react-native'
import { COLORS } from '../constants/colors'

import { useDispatch, useSelector } from 'react-redux'

const styles = StyleSheet.create({
    container:{
        height: 100,
        width:'100%',
        justifyContent:'center',
        alignItems: 'center',
        paddingVertical:10,
        marginVertical: '3%',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: COLORS.DODGER_BLUE,
        backgroundColor: COLORS.WHITE,
    },
    detailContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'flex-start',
        paddingVertical:5,
        borderRadius: 8,
        borderColor: COLORS.DODGER_BLUE,
        backgroundColor: COLORS.WHITE,
    },

    productNameText:{
        paddingHorizontal: 10,
        fontSize: 10,
        fontFamily:'open-sans',
        color: COLORS.DARK_SLATE_GRAY,
    },

    idText:{
        fontSize: 12,
        fontFamily:'open-sans',
        color: COLORS.GRAY,
        width: '100%',
    },
    priceText:{
        alignSelf:'center',
        textAlign: 'left',
        fontSize: 12,
        fontFamily:'open-sans',
        backgroundColor: COLORS.DEEP_SKY_BLUE,
        color:COLORS.WHITE_SMOKE,
        width: '100%',
    },
    dateText:{
        alignSelf:'center',
        textAlign: 'left',
        fontSize: 12,
        fontFamily:'open-sans',
        backgroundColor: COLORS.DODGER_BLUE,
        color:COLORS.WHITE_SMOKE,
        width: '100%',
    },
    image:{
        height:'80%', 
        width: '100%',
        borderWidth:1, 
        borderColor: COLORS.DODGER_BLUE,
        borderRadius: 8,
    },
})

const OrderProduct = ({ orderProduct }) => {

    const [expand, setExpand] = useState(false)
    
        return <TouchableOpacity
                    onPress={()=>{
                        setExpand(!expand);
                    }}
                >

                <View style={[styles.container]}>
                    <Text style={styles.idText} > {`Order [${orderProduct.id}]`} </Text>
                    <Text style={styles.dateText} > {`Date: ${orderProduct.date}`} </Text>
                    <Text style={styles.priceText} > {`$ ${orderProduct.total}`} </Text>
                </View>

                <View 
                    style={[styles.detailContainer, 
                        {flexDirection:'column', display: expand ? 'flex' : 'none',
                        justifyContent:'center', alignItems: 'center',
                        }
                    ]}
                >
                        <FlatList
                            style={styles.flatList}
                            data={orderProduct.products}
                            renderItem={({item})=>(
                                <View style={[styles.detailContainer, { minWidth: '65%'}]} >
                                    <Text style={styles.productNameText}>{`${item.brand} ${item.model}`} </Text>
                                    <Text style={styles.productNameText}>{`$ ${item.price} x ${item.quantity}`}</Text>
                                </View>
                            )}
                            keyExtractor={(item) => item.id}
                            showsVerticalScrollIndicator={false}
                        />
                </View >

        </TouchableOpacity>
    
}

export default OrderProduct