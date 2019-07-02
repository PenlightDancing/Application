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

import { TopBar } from '../topBar/topBar'
import { ScrollView } from 'react-native-gesture-handler';

const VRpreview = () => {
    return (
        <View style = {styles.container}>
            <TopBar pageName = {'VR Preview'}/>
            <ScrollView style = {{flex: 1}} scrollEnabled = {false}>
                
            </ScrollView>
        </View>
    )
}
 
export { VRpreview }