import { mainColor, secondaryColor } from './../../constants/colorConstants';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 40,
        paddingBottom: 10,
        backgroundColor: mainColor
    },
    account: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginRight: 25
    },
    menuButton: {
        marginLeft: 25
    },
    userText: {
        color: secondaryColor,
        marginLeft: 5
    },
    dialogText: {
        margin: 10,
    }
})