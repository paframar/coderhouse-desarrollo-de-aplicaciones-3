import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import CategoryScreen from '../src/screens/CategoryScreen'
import ProductsScreen from  '../src/screens/ProductsScreen'
import DetailScreen from '../src/screens/DetailScreen'
import { COLORS } from '../src/colors/colors'

const styles = StyleSheet.create({})

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
    return (
            <Stack.Navigator 
                initialRouteName='Category'
                screenOptions={{
                    headerStyle: {
                      backgroundColor: Platform.OS === 'android' ? COLORS.WHITE : ''
                    },
                    headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.NAVY_BLUE,
                    headerTitleStyle: {
                      fontFamily: 'open-sans-bold'
                    }
                  }}
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
    )
}

export default ShopNavigator