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

import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
const TapIcon = ({focused, title}) => {
  return ( 
    <View style = {styles.taps}>
      { title === 'Profile' ? ( <View>
        { focused ? ( <Image source = { require('./assets/userColor.png')} style = {styles.tapsImage}/> ) : (
          <Image source = { require('./assets/user.png')} style = {styles.tapsImage}/>
        )}
      </View> ) : null}
      { title === 'Ranking' ? ( <View>
        { focused ? ( <Image source = { require('./assets/rank.png')} style = {styles.tapsImage}/> ) : (
          <Image source = { require('./assets/rankGray.png')} style = {styles.tapsImage}/>
        )}
      </View> ) : null}

      { title === 'VR' ? ( 
        <View style = {styles.AppBar}>
          { focused ? ( <Image source = { require('./assets/virtual-realityColor.png')} style = {styles.tapsImage2}/> ) : (
            <Image source = { require('./assets/virtual-reality.png')} style = {styles.tapsImage2}/>
          )}
          { focused ? (
            <Text style = {styles.tapsText1}>{title}</Text>
          ) : (
            <Text style = {[styles.tapsText1, {color : '#a5a5a5'}]}>{title}</Text>
          )}
        </View> 
      ) : null}

      { title === 'News' ? ( <View>
        { focused ? ( <Image source = { require('./assets/newspaperColor.png')} style = {styles.tapsImage1}/> ) : (
          <Image source = { require('./assets/newspaper.png')} style = {styles.tapsImage1}/>
        )}
      </View> ) : null}
      { title === 'Setting' ? ( <View>
        { focused ? ( <Image source = { require('./assets/settings-work-toolColor.png')} style = {styles.tapsImage}/> ) : (
          <Image source = { require('./assets/settings-work-tool.png')} style = {styles.tapsImage}/>
        )}
      </View> ) : null}
      { focused && title !== 'VR' ? (
        <Text style = {styles.tapsText}>{title}</Text>
      ) : (
        <Text style = {[styles.tapsText, {color : '#a5a5a5'}]}>{title}</Text>
      )}
    </View>
  )
}
//D3F7BA
//프로필 / 랭킹 / ( 프리뷰 ) / 뉴스 / 설정
export default function App() {
  return (
    <Router>
      <Scene key = "root">
        <Scene key = "tabbar" tabs = {true} showLabel = {false} tabBarStyle={styles.contanier} hideNavBar>
          <Scene key="profile" icon = {TapIcon} title="Profile">
            <Scene key = "asd" title = "asd" component = {Test} hideNavBar/>
          </Scene>
          <Scene key="ranking" icon = {TapIcon} title="Ranking">
            <Scene key = "asd" title = "asd" component = {Test} hideNavBar/>
          </Scene>
          <Scene key="vrpreview" icon = {TapIcon} title="VR">
            <Scene key = "asd" title = "asd" component = {Test} hideNavBar/>
          </Scene>
          <Scene key="news" icon = {TapIcon} title="News">
            <Scene key = "asd" title = "asd" component = {Test} hideNavBar/>
          </Scene>
          <Scene key="setting" icon = {TapIcon} title="Setting">
            <Scene key = "asd" title = "asd" component = {Test} hideNavBar/>
          </Scene>
        </Scene>
      </Scene>
    </Router>
  );
}
const Test = () => { return (<View></View>) }

const styles = StyleSheet.create({
  contanier: {
    backgroundColor: '#1d1d1d',
    width: vw(100),
    height: vh(9)
  },
  taps: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  tapsImage: {
    marginTop: vw(1),
    width: vw(5.5),
    height: vw(5.5),
  },
  tapsImage1: {
    marginTop: vw(1),
    width: vw(5.2),
    height: vw(5.2),
  },
  tapsImage2: {
    marginTop: vw(1),
    width: vw(8),
    height: vw(8),
  },
  tapsText: {
    fontSize: vw(2.5),
    color: '#D3F7BA',
    marginTop: vw(0.7)
  },
  tapsText1: {
    fontSize: vw(2.8),
    color: '#D3F7BA',
    marginTop: vw(0.1)
  },
  AppBar: {
    width: vw(18),
    height: vw(18),
    backgroundColor: '#1d1d1d',
    borderRadius: vw(13),
    borderColor: '#D3F7BA',
    borderWidth: vw(0.5),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: vh(7)
  }
})