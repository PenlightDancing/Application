import { 
    StyleSheet,
    Platform,
    StatusBar,
} from 'react-native'
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import { gray } from 'ansi-colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1d1d1d',
        alignItems: 'center',
        ...Platform.select({
          android: {
              marginTop: StatusBar.currentHeight
          }
        })
    },
})

const profileCard = StyleSheet.create({
    container: {
        width: vw(90),
        height: vw(45),
        backgroundColor: '#282828',
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
    }
})


export { styles, profileCard }