import React from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import { Ionicons, Entypo, Feather, MaterialIcons, FontAwesome5} from '@expo/vector-icons'

import CategoryButton from '../components/CategoryButton'
import { COLORS } from '../constants/colors'

import { useDispatch, useSelector } from 'react-redux'
import { selectCategory } from '../../store/actions/category.action'

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        height: '80%',
        marginTop: 15,
    }
})

const renderIcon = (name, iconLibName) => {
    const iconTypes = { Ionicons, Entypo, Feather, MaterialIcons, FontAwesome5}
    const Icon = iconTypes[iconLibName]
    return <View style={{backgroundColor: COLORS.SKY_BLUE, padding:20, borderRadius: 8}}>
        <Icon name={name} size={24} color={COLORS.WHITE_SMOKE} />
    </View>
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
    
    const renderCategoryButtons = () => categories.map((category) => (
            <CategoryButton
                title={category}
                icon={()=> getIcon(category)}
                onPress={()=>handleSelectedCategory(category)}
            />
        )
    )

    return (
        <View style={styles.container}>
            {renderCategoryButtons()}
        </View>
    )
}

export default CategoryScreen