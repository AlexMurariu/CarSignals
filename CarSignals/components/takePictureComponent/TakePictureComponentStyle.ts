import { StyleSheet, Dimensions  } from 'react-native';
const { width: winWidth, height: winHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        height: '100%',
    },
    preview: {
        height: winHeight,
        width: winWidth,
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
    },
    buttonContainer: {
        borderWidth: 2,
        borderRadius: 50,
        borderColor: 'white',
        height: 50,
        width:50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContent: {
        borderWidth: 2,
        borderRadius: 50,
        borderColor: 'white',
        height: 40,
        width:40,
        backgroundColor: '#fff'
    },
    bottomToolbar: {
        width: winWidth,
        position: 'absolute',
        height: 100,
        bottom: 0,
    },
    alignCenter: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },  captureBtn: {
        width: 60,
        height: 60,
        borderWidth: 2,
        borderRadius: 60,
        borderColor: "#FFFFFF",
    }
})