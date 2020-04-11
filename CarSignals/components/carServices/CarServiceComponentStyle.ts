import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    markerCalloutText: {
        backgroundColor: "#fff",
        maxWidth: 250,
        marginBottom: 20,
        borderRadius: 5,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#000",
        padding: 10
    },
    markerTitle: {
        fontWeight: "bold",
        marginBottom: 10
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
})