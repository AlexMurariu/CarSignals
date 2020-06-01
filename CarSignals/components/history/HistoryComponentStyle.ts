import { StyleSheet } from 'react-native';
import { mainColor, secondaryColor } from '../../constants';

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        width: "100%",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 15,
        paddingHorizontal: 15
    }, 
    predictionsContainer: {
        width: "100%"
    },
    noItmesMessage: {
        fontSize: 16,
        display: "flex",
        textAlign: "center",
        backgroundColor: "#ffc970",
        padding: 10,
        borderRadius: 10
    },
    filterContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10
    },
    filterButton: {
        backgroundColor: mainColor,
        padding: 10,
        borderRadius: 25,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        height: 50
    },
    filterButtonText: {
        fontSize: 16,
        color: secondaryColor,
        marginHorizontal: 5
    }
})