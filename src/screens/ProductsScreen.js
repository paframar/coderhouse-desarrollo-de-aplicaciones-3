import React from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'


import ProductCard from '../components/ProductCard'

import { computerProducts } from '../../data/computerProducts'
import {COLORS} from '../colors/colors'


const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems:'center',
    height:'85%',
    width: '100%',
  },
  header:{
    fontSize:24,
    fontWeight:'bold',
    marginVertical: 15,
    color:COLORS.DODGER_BLUE,
  },
  flatList:{
    width:'90%',
  },
})

const ProductsScreen = ({ navigation, route }) => {
  const { category } = route.params;
  const products = computerProducts.find((item) => item.category === category).products;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{category}</Text>

      <FlatList
        style={styles.flatList}
        data={products}
        renderItem={({item, index})=>(
          <ProductCard key={index} 
            model={item.model}
            brand={item.brand}
            image={item.image}
            price={item.price} 
            onPress={()=>{
              navigation.navigate('Detail', { item })
            }}
          />
        )}
        keyExtractor={(item) => item.id}
      />
      
    </View>
  )
}

export default ProductsScreen
