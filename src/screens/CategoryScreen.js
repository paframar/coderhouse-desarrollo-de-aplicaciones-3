import React from 'react'
import { StyleSheet, View, Text, Button, FlatList } from 'react-native'
import  { Ionicons, Entypo, Feather, MaterialIcons, FontAwesome5} from '@expo/vector-icons'

import CategoryButton from '../components/CategoryButton'
import { COLORS } from '../constants/colors'

import { useDispatch, useSelector } from 'react-redux'
import { selectCategory } from '../../store/actions/category.action'

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        height:'85%',
    }
})

const renderIcon = (name, iconLibName) => {
    const iconTypes = { Ionicons, Entypo, Feather, MaterialIcons, FontAwesome5}
    const Icon = iconTypes[iconLibName]
    return <Icon name={name} size={24} color={COLORS.WHITE_SMOKE} />
}

const getIcon = (category) => {
    switch (category){
        case 'Laptops':
            return renderIcon('laptop', 'Entypo')
        case 'Monitors':
            return renderIcon('monitor', 'Feather')
        case 'Keyboards':
            return renderIcon('keyboard', 'MaterialIcons')
        case 'Mice':
            return renderIcon('mouse', 'Entypo')
        case 'Headsets': 
            return renderIcon('md-headset', 'Ionicons')
        default : return 
    }
}

const CategoryScreen = ({ navigation }) => {

    const categories = useSelector(state => state.categories.categories)
    const dispatch = useDispatch()

    const handleSelectedCategory = (categoryName) => {
        dispatch(selectCategory(categoryName))
        navigation.navigate('Products')
    }
    
    const renderListItem = ({item}) => (
        <CategoryButton
            title={item}
            icon={()=> getIcon(item)}
            onPress={()=>handleSelectedCategory(item)}
        />
    )

    return (
        <FlatList
            data={categories}
            renderItem={renderListItem}    
        />
    )
}

export default CategoryScreen