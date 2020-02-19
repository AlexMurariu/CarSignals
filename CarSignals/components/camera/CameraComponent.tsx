import React from 'react';
import { View, Text, Alert, TouchableOpacity } from 'react-native';
import { styles } from './CameraComponentStyle';
import { CameraProps } from './types';
import { ActivityIndicator } from 'react-native-paper';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';

class CameraComponent extends React.Component<CameraProps> {
    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.back
    };

    componentDidMount() {
        this.getCameraPermission();
    }

    async getCameraPermission() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }

    render() {
        const { hasCameraPermission } = this.state;
        return (
            <View style={{ flex: 1 }}>
                {this.state.hasCameraPermission === null ? (
                    <ActivityIndicator size="large" color="#000" />
                ) : this.state.hasCameraPermission === false ? (
                    <Text>No camera permissions were granted!</Text>
                ) : (
                    <Camera style={{ flex: 1 }} type={this.state.type}>
                        <View
                            style={{
                                flex: 1,
                                backgroundColor: 'transparent',
                                flexDirection: 'row'
                            }}
                        ></View>
                    </Camera>
                )}
            </View>
        );
    }
}

export default CameraComponent;
