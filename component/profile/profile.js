import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import { 
    View,
    Text,
    StyleSheet,
    Platform,
    StatusBar,
    Image
} from 'react-native'

import { styles } from './style'

// import { TopBar } from '../topBar/topBar'

const Profile = () => {
    return (
        <View style = {styles.container}>
            {/* <TopBar pageName = {'Profile Page'}/> */}
        </View>
    )
}
 
export { Profile }