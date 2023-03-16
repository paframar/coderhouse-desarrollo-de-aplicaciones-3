import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import  { Ionicons, Entypo, Feather, MaterialIcons, FontAwesome5} from '@expo/vector-icons'

import CategoryButton from '../components/CategoryButton'
import { COLORS } from '../colors/colors'

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        height:'85%',
    }
})

const getIcon = (name, iconLibName) => {
    const iconTypes = { Ionicons, Entypo, Feather, MaterialIcons, FontAwesome5}
    const Icon = iconTypes[iconLibName]
    return <Icon name={name} size={24} color={COLORS.WHITE_SMOKE} />
}


const CategoryScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <CategoryButton
                title='Laptops'
                icon={()=> getIcon('laptop', 'Entypo')}
                onPress={()=>{navigation.navigate('Products', { category: 'Laptops' })}}
            />
            <CategoryButton
                title='Monitors'
                icon={()=> getIcon('monitor', 'Feather')}
                onPress={()=>{navigation.navigate('Products', { category: 'Monitors' })}}
            />
            <CategoryButton
                title='Keyboards'
                icon={()=> getIcon('keyboard', 'MaterialIcons')}
                onPress={()=>{navigation.navigate('Products', { category: 'Keyboards' })}}
            />
            <CategoryButton
                title='Mice'
                icon={()=> getIcon('mouse', 'Entypo')}
                onPress={()=>{navigation.navigate('Products', { category: 'Mice' })}}
            />
            <CategoryButton
                title='Headsets'
                icon={()=> getIcon('md-headset', 'Ionicons')}
                onPress={()=>{navigation.navigate('Products', { category: 'Headsets' })}}
            />
        </View>
    )
}

export default CategoryScreen