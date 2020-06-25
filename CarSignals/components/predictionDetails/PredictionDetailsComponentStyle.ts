import { mainColor } from './../../constants/colorConstants';
import { StyleSheet, Dimensions  } from 'react-native';
const { width: winWidth, height: winHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center"
    },
    iconContainer: {
        marginTop: 80
    },
    closeButton: {
        margin: 15,
        position: "absolute",
        top: 0,
        right: 0
    },
    infoButton: {
        margin: 15,
        position: "absolute",
        top: 0,
        left: 0
    },
    detectionDateText: {
        fontStyle: "italic",
        fontSize: 16
    },
    header: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10
    },
    textContainer: {
        marginTop: 10,
        paddingHorizontal: 15,
        display: "flex",
        width: "90%",
        maxHeight: winHeight - 210,
        borderColor: mainColor,
        borderWidth: 3,
        borderStyle: 'solid',
        borderRadius: 10,
    },
    textContent: {
        marginBottom: 10,
        textAlign: 'justify'
    },
    causeContainer: {
        marginBottom: 20
    }
})