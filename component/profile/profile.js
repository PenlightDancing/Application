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

import { styles, profileCard, achive, penlight } from './style'

import { TopBar } from '../topBar/topBar'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

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

    const [achiveList = [
        {
            img: '',
            title: '모두 함께 오타게!',
            date: '2019/07/21'
        },
        {
            img: '',
            title: '다죽여! 다죽여! 다죽여!',
            date: '2019/07/21'
        },
        {
            img: '',
            title: '아 참수마렵다.',
            date: '2019/07/21'
        },
        {
            img: '',
            title: '이이잉 앗살람알라이꿈',
            date: '2019/07/21'
        }
    ], setAchive] = useState()

    return (
        <View style = {styles.container}>
            <TopBar pageName = {'Profile'}/>
            <ScrollView style = {{flex: 1}} showsVerticalScrollIndicator = {false}>
                <Text style = {[styles.title, {marginTop: vh(4)}]}>유저 프로필</Text>
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
                <View style = {styles.titleBox}>
                    <Text style = {styles.title}>나의 업적</Text>
                    <View style = {{flex: 1}}></View>
                    <TouchableOpacity style = {styles.more}>
                        <Text style = {styles.link}>더보기 ></Text>
                        <Image style = {styles.linkImg}/>
                    </TouchableOpacity>
                </View>
                <ScrollView style = {achive.container} horizontal = {true} showsVerticalScrollIndicator = {false}>
                    { achiveList.map ((contact, i) => {
                        return (
                            <AchiveItem img = {contact.img} title = {contact.title} date = {contact.date} key = {i}/>
                        )
                    })}
                </ScrollView>
                <View style = {styles.titleBox}>
                    <Text style = {styles.title}>내 펜라이트</Text>
                    <View style = {{flex: 1}}></View>
                    <TouchableOpacity style = {styles.more}>
                        <Text style = {styles.link}>더보기 ></Text>
                        <Image style = {styles.linkImg}/>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

const AchiveItem = (props) => {
    return (
        <View style = {achive.itemBox}>
            <Image source = {require ('../../assets/Picture1.png')} style = {achive.img}/>
            <Text style = {achive.title}>{props.title}</Text>
            <Text style = {achive.date}>{props.date}</Text>
        </View>
    )
}

const PenlightItem = (props) => {
    return (
        <View style = {penlight.container}>
            
        </View>
    )
}
export { Profile }