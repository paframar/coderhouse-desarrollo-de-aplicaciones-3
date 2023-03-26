import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import DetailView from '../components/DetailView'
import DetailButton from '../components/DetailButton'

import { useSelector } from 'react-redux'
import { selectProduct } from '../../store/reducers/product.reducer'

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        height:'70%',
        marginTop: '20%',
    }
})

const DetailScreen = ({ route }) => {

    const selectedProduct = useSelector(state => state.products.selected)

    return (
        <View style={styles.container}>
            <DetailView item={selectedProduct} />
            <DetailButton /> 
        </View>
    )
}

export default DetailScreen