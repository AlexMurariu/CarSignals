import React, { Component } from 'react'
import {View, Text } from 'react-native';
import { styles } from './MenuComponentStyle';

export default class MenuComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text>Take photo</Text>
                </View>
                <View>
                    <Text>Auto services</Text>
                </View>
                <View>
                    <Text>History</Text>
                </View>
                <View>
                    <Text>About</Text>
                </View>
            </View>
        )
    }
}
