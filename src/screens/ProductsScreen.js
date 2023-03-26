import React, { useEffect } from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'

import ProductCard from '../components/ProductCard'

// import { computerProducts } from '../../data/computerProducts'
import {COLORS} from '../constants/colors'

import { useDispatch, useSelector } from 'react-redux'
import { filterProducts, selectProduct } from '../../store/actions/product.action'

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

const ProductsScreen = ({ navigation }) => {

  const dispatch = useDispatch()
  const selectedCategory = useSelector(state=> state.categories.selected) 
  console.log('selectedCategory ', selectedCategory)

  useEffect(()=>{
    dispatch(filterProducts(selectedCategory))
  }, [])
  
  const products = useSelector(state => state.products.filteredProducts)

  console.log('products ', products)

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{selectedCategory}</Text>

      <FlatList
        style={styles.flatList}
        data={products}
        renderItem={({item})=>(
          <ProductCard 
            model={item.model}
            brand={item.brand}
            image={item.image}
            price={item.price} 
            onPress={()=>{
              navigation.navigate('Detail')
              dispatch(selectProduct(item.id))
            }}
          />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
      
    </View>
  )
}

export default ProductsScreen
