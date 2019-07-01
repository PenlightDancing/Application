import { 
    StyleSheet,
    Platform,
    StatusBar,
} from 'react-native'
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

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


export { styles}