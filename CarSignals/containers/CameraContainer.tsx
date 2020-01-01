import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

class CameraContainer extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Camera</Text>
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

export default CameraContainer