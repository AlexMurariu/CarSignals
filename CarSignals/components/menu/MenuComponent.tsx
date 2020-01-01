import React, { Component } from 'react'
import {View, Text, Animated } from 'react-native';
import { styles } from './MenuComponentStyle';
import { Button } from 'react-native-paper';
import NavigationService from '../../navigation/NavigationService';

export default class MenuComponent extends Component {
    state = {
        visibility: new Animated.Value(0)
    }

    componentDidMount = () => {
        Animated.timing(this.state.visibility, {
            toValue: 1,
            duration: 1000
        }).start();
    }

    render() {
        const containerStyle = {
            opacity: this.state.visibility.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1]
            }),
            transform: [{
                scale: this.state.visibility.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1.1, 1],
                })
            }]
        }

        return (
            <View style={styles.container}>
                <Animated.View style={[containerStyle, styles.menu]}>
                    <Text style={styles.menuTitle}>Menu</Text>
                    <Button 
                        mode='contained'
                        icon='camera' 
                        onPress={() => NavigationService.navigate('Camera')}
                        style={styles.menuItem}
                        uppercase={false}
                        labelStyle={{fontSize: 18}}
                    >
                        Take photo
                    </Button>
                    <Button 
                        mode='contained'
                        icon='car' 
                        onPress={() => NavigationService.navigate('CarServices')}
                        style={styles.menuItem}
                        uppercase={false}
                        labelStyle={{fontSize: 18}}
                    >
                        Car services
                    </Button>
                    <Button 
                        mode='contained'
                        icon='history' 
                        onPress={() => NavigationService.navigate('History')}
                        style={styles.menuItem}
                        uppercase={false}
                        labelStyle={{fontSize: 18}}
                    >
                        History
                    </Button>
                    <Button 
                        mode='contained'
                        icon='information-outline' 
                        onPress={() => NavigationService.navigate('Guide')}
                        style={styles.menuItem}
                        uppercase={false}
                        labelStyle={{fontSize: 18}}
                    >
                        Guide
                    </Button>
                </Animated.View>
            </View>
        )
    }
}
