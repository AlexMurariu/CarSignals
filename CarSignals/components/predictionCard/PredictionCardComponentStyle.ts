import { mainColor, secondaryColor } from './../../constants/colorConstants';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: mainColor,
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
        width: "100%"
    },
    dateText: {
        color: secondaryColor,
        fontSize: 18,
        marginRight: 10,
        position: "absolute",
        right: 0
    },
    nameContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    nameText: {
        color: secondaryColor,
        fontSize: 18,
        marginLeft: 15
    }
})