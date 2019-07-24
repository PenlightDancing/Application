import { 
    StyleSheet,
    Platform,
    StatusBar,
} from 'react-native'
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(21,30,36)',
        borderBottomWidth: vw(0.3),
        borderColor: '#D3F7BA'
    },
    searchBar: {
        width: vw(100),
        height: vh(14),
        alignItems: 'center',
        justifyContent: 'center'
    },
    textBar: {
        width: vw(100),
        height: vh(9),
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: '#fff',
        fontSize: vw(5.5),
        textAlign: 'center',
        fontWeight: 'bold',
    },
    searchBox: {
        width: vw(90),
        height: vh(5),
        backgroundColor: '#1d1d1d',
        borderColor: '#D3F7BA',
        borderWidth: vw(0.3),
        marginTop: vh(1),
        borderRadius: vh(1),
        alignItems: 'center',
        flexDirection: 'row'
    },
    searchImage: {
        width: vh(2.6),
        height: vh(2.6),
        marginLeft: vw(4.5)
    },
    searchText: {
        height: vh(4.8),
        flex: 1,
        fontSize: vw(3.8),
        color: '#FFFFCC',
        marginLeft: vw(3.7),
        marginRight: vw(4)
    }
})


export { styles}