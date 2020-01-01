import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

class CarServicesContainer extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Car services</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default CarServicesContainer