import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

import CategoryButton from '../components/CategoryButton'

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
    }
})

const CategoryScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <CategoryButton
                title='Laptops'
                onPress={()=>{navigation.navigate('Products', { category: 'Laptops' })}}
            />
            <CategoryButton
                title='Monitors'
                onPress={()=>{navigation.navigate('Products', { category: 'Monitors' })}}
            />
            <CategoryButton
                title='Keyboards'
                onPress={()=>{navigation.navigate('Products', { category: 'Keyboards' })}}
            />
            <CategoryButton
                title='Mice'
                onPress={()=>{navigation.navigate('Products', { category: 'Mice' })}}
            />
        </View>
    )
}

export default CategoryScreen