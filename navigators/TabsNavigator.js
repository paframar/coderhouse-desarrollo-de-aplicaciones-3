import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'

import CartScreen from '../src/screens/CartScreen'
import ShopNavigator from './ShopNavigator'
import styles from './styles'
import { COLORS } from  '../src/colors/colors'

const BottomTabs = createBottomTabNavigator()

const TabsNavigator = () => {
    return (
        <BottomTabs.Navigator
            screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBar
          }}
        >
            <BottomTabs.Screen 
                name= {'ShopNavigator'} 
                component={ShopNavigator} 
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabBarIcon}>
                          <Entypo name="shop" size={24} color={focused ? COLORS.DODGER_BLUE : COLORS.GRAY} />
                          <Text style={{ color: focused ? COLORS.DODGER_BLUE : COLORS.GRAY }}>Shop</Text>
                        </View>
                      )
                }}
            />
            <BottomTabs.Screen 
                name= {'cart'} 
                component={CartScreen} 
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabBarIcon}>
                          <Ionicons name="md-cart" size={24} color={focused ? COLORS.DODGER_BLUE : COLORS.GRAY} />
                          <Text style={{ color: focused ? COLORS.DODGER_BLUE : COLORS.GRAY }}>Cart</Text>
                        </View>
                      )
                }}
            />
        </BottomTabs.Navigator>
    )
}

export default TabsNavigator