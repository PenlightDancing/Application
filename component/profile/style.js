import { 
    StyleSheet,
    Platform,
    StatusBar,
} from 'react-native'
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(11,20,26)',
        alignItems: 'center',
        ...Platform.select({
          android: {
              marginTop: StatusBar.currentHeight
          }
        })
    },
    title: {
        fontSize : vw(5),
        color: '#fff',
    },
    titleBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: vh(4),
        marginBottom: vh(2.5),
        marginLeft: vw(1.5)
    },
    more: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    link: {
        fontSize: vw(3),
        color: '#fff'
    },
    linkImg: {
        marginRight: vw(1.5)
    }
})

const profileCard = StyleSheet.create({
    container: {
        width: vw(90),
        height: vw(45),
        backgroundColor: 'rgb(21,30,36)',
        borderRadius: vw(5),
        marginTop: vh(2),
    },
    name: {
        fontSize: vw(4.5),
        color: '#fff'
    },
    lv: {
        marginLeft: vw(3),
        fontSize: vw(2.8),
        color: '#fff'
    },
    nameBox: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginTop: vh(2),
        marginLeft: vh(2)
    },
    rank: {
        marginLeft: vh(2.3),
        color: 'gray',
        marginTop: vh(1.4),
        fontSize: vw(2.8)
    },
    info: {
        marginLeft: vh(2),
        marginBottom: vh(1)
    },
    infoText: {
        color: '#fff',
        fontSize: vw(3),
        marginBottom: vh(1)
    },
})

const achive = StyleSheet.create({
    container: {
        width: vw(90),
    },
    itemBox: {
        width: vw(35),
        height: vw(45),
        backgroundColor: 'rgb(21,30,36)',
        borderRadius: vw(5),
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: vw(5)
    },
    img: {
        marginBottom: vh(2.5),
        width: vw(15),
        height: vw(15)
    },
    title : {
        fontSize: vw(3),
        marginBottom: vh(0.8),
        color: '#fff'
    },
    date : {
        fontSize: vw(2.6),
        color: 'gray'
    },
})

const penlight = StyleSheet.create({
    box: {
        marginTop: vh(2),
        width: vw(100),
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    container: {
        width: vw(20),
        height: vw(20),
    }
})
export { styles, profileCard, achive, penlight }