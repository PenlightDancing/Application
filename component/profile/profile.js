import React, { useState, useEffect } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import { 
    View,
    Text,
    StyleSheet,
    Platform,
    StatusBar,
    Image,
    ScrollView
} from 'react-native'

import { styles, profileCard } from './style'

import { TopBar } from '../topBar/topBar'

const Profile = () => {
    const [ user = {
        name : '귀염뽀짝 김민식',
        lv: 112,
        rank : 31,
        maxScore: 123123123,
        maxCombo: 958,
        playCount: 1832,
        profileImg: 'default'
    }, setUser ] = useState()
    return (
        <View style = {styles.container}>
            <TopBar pageName = {'Profile'}/>
            <ScrollView style = {{flex: 1}} showsVerticalScrollIndicator = {false}>
                <View style =  {profileCard.container}>
                    <View style = {profileCard.nameBox}>
                        <Text style = {profileCard.name}>{user.name}</Text>
                        <Text style= { profileCard.lv}>Lv.{user.lv}</Text>
                    </View>
                    <Text style = {profileCard.rank}>랭킹 #{user.rank}위</Text>
                    <View style = {{flex: 1}}></View>
                    <View style = {profileCard.info}>
                        <Text style = {profileCard.infoText}>{user.playCount}게임 플레이</Text>
                        <Text style = {profileCard.infoText}>최고 점수 : {user.maxScore}</Text>
                        <Text style = {profileCard.infoText}>최대 콤보 : {user.maxCombo}</Text>
                    </View>
                    <View></View>
                </View>
            </ScrollView>
        </View>
    )
}
 
export { Profile }