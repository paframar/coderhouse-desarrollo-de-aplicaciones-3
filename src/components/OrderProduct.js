import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, Button, TouchableOpacity, FlatList } from 'react-native'
import { COLORS } from '../constants/colors'

import { useDispatch, useSelector } from 'react-redux'

const styles = StyleSheet.create({
    container:{
        height: 140,
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        paddingHorizontal:'5%',
        paddingVertical:10,
        marginVertical: '2%',
        borderRadius: 8,
        borderTopWidth: 2,
        borderBottomWidth: 4,
        borderRightWidth:4,
        borderLeftWidth:2,
        borderColor: COLORS.DODGER_BLUE,
        backgroundColor: COLORS.WHITE,
    },
    detailContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'flex-start',
        paddingHorizontal:'5%',
        paddingVertical:5,
        marginVertical: '2%',
        borderRadius: 18,
        borderBottomWidth: 1,
        borderRightWidth:1,
        borderColor: COLORS.DODGER_BLUE,
        backgroundColor: COLORS.WHITE,
    },
    idText:{
        fontSize: 12,
        fontFamily:'open-sans',
        color: COLORS.GRAY,
    },
    productNameText:{
        fontSize: 8,
        fontFamily:'open-sans',
        color: COLORS.DARK_SLATE_GRAY,
    },
    priceText:{
        alignSelf:'center',
        textAlign: 'left',
        fontSize: 12,
        fontFamily:'open-sans',
        backgroundColor: COLORS.DEEP_SKY_BLUE,
        color:COLORS.WHITE_SMOKE,
        width:170,
        height: '20%',
    },
    dateText:{
        alignSelf:'center',
        textAlign: 'left',
        fontSize: 12,
        fontFamily:'open-sans',
        backgroundColor: COLORS.DODGER_BLUE,
        color: COLORS.GAINSBORO,
        width:170,
        height: '20%',
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
                    
                        <View style={{flexDirection:'column'}}>
                            <Text style={styles.idText} > {`Order [${orderProduct.id}]`} </Text>
                        </View >

                        <View style={{flexDirection:'column', width: '15%'}}>
                            <Text style={styles.dateText} > {`Date: ${orderProduct.date}`} </Text>
                            <Text style={styles.priceText} > {`$ ${orderProduct.total}`} </Text>
                        </View >

                        
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