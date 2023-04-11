import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons, Octicons } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'

import OrdersScreen from '../src/screens/OrdersScreen'
import CartScreen from '../src/screens/CartScreen'
import RetailersScreen from '../src/screens/RetailersScreen'
import ShopNavigator from './ShopNavigator'
import styles from './styles'
import { COLORS } from  '../src/constants/colors'

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
            <BottomTabs.Screen 
                name= {'orders'} 
                component={OrdersScreen} 
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabBarIcon}>
                          <Octicons name="checklist" size={24} color={focused ? COLORS.DODGER_BLUE : COLORS.GRAY} />
                          <Text style={{ color: focused ? COLORS.DODGER_BLUE : COLORS.GRAY }}>Orders</Text>
                        </View>
                      )
                }}
            />
            <BottomTabs.Screen 
                name= {'Retailers'} 
                component={RetailersScreen} 
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabBarIcon}>
                          <Octicons name="location" size={24} color={focused ? COLORS.DODGER_BLUE : COLORS.GRAY} />
                          <Text style={{ color: focused ? COLORS.DODGER_BLUE : COLORS.GRAY }}>Retailers</Text>
                        </View>
                      )
                }}
            />
        </BottomTabs.Navigator>
    )
}

export default TabsNavigator