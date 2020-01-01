import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

class HistoryContainer extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>History</Text>
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

export default HistoryContainer