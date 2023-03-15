import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import CategoryScreen from '../src/screens/CategoryScreen'
import ProductsScreen from  '../src/screens/ProductsScreen'
import DetailScreen from '../src/screens/DetailScreen'

const styles = StyleSheet.create({})

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName='Category'
            >
                <Stack.Screen 
                    name='Category' 
                    component= {CategoryScreen} 
                />
                <Stack.Screen 
                    name='Products' 
                    component= {ProductsScreen} 
                />
                <Stack.Screen 
                    name='Detail' 
                    component= {DetailScreen} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ShopNavigator