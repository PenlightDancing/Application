import React, { useState } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import { 
    View,
    Text,
    StyleSheet,
    Platform,
    StatusBar,
    Image,
    TextInput
} from 'react-native'

import { styles } from './style'

const TopBar = ({ pageName }) => {
    return (
        <View style = {styles.container}>
            { pageName === 'Profile Page' ? ( <TextBar/> ) : null}
            { pageName === 'Ranking Page' ? ( <SearchBar/> ) : null}
        </View>
    )
}
const SearchBar = () => {
    const [searchText, changeText] = useState()
    return (
        <View style = {styles.searchBar}>
            <Text style = {styles.title}>Ranking</Text>
            <View style = {styles.searchBox}>
                <Image source = {require('../../assets/search.png')} style = { styles.searchImage }/>
                <TextInput
                    placeholder = 'Please enter the title of the song'
                    placeholderTextColor = '#D3F7BA'
                    style = { styles.searchText }
                    value = {searchText}
                    onChangeText = { searchText => changeText(searchText)}
                />
            </View>
        </View>
    )
}

const TextBar = () => {
    return (
        <View style = {styles.textBar}>
            <Text style = {styles.title}>Profile</Text>
        </View>
    )
}
export { TopBar }