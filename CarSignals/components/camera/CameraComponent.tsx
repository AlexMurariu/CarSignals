import React from 'react';
import { View, Text, Alert, TouchableOpacity } from 'react-native';
import { styles } from './CameraComponentStyle';
import { CameraProps } from './types';
import { ActivityIndicator } from 'react-native-paper';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import Toast from 'react-native-root-toast';

class CameraComponent extends React.Component<CameraProps> {
    state = {
        camera: null,
        hasCameraPermission: null,
        hasCameraRollPermission: null,
        type: Camera.Constants.Type.back,
        photo: null
    };

    componentDidMount() {
        this.getCameraPermission();
        this.getCameraRollPermissions();
    }

    showToaster(message: string) {
        Toast.show(message, {
            duration: 5000,
            shadow: true,
            animation: true,
            hideOnPress: true,
            position: 100,
            delay: 0,
        }) 
    }

    async getCameraPermission() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }

    async getCameraRollPermissions() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status === 'granted') {
          this.setState({ hasCameraRollPermission: true });
        } else {
          this.setState({ hasCameraRollPermission: false });
        }
      }

    async snapPhoto() {
        const { uri } = await this.state.camera.takePictureAsync();
        const asset = await MediaLibrary.createAssetAsync(uri);
        MediaLibrary.createAlbumAsync('Expo', asset)
            .then(() => this.showToaster("Picture taken, please check your gallery."))
            .catch((error: string) => this.showToaster("Something happend while taking the picture. Please try again."));
    }

    setCamera(camera: any) {
        if (this.state.camera) {
            return;
        }
        this.setState({camera})
    }

    render() {
        const { hasCameraPermission, hasCameraRollPermission } = this.state;

        return (
            <View style={{ flex: 1 }}>
                {hasCameraPermission === null && hasCameraRollPermission ? (
                    <ActivityIndicator size="large" color="#000" />
                ) : this.state.hasCameraPermission === false ? (
                    <Text>No camera permissions were granted!</Text>
                ) : (
                    <Camera 
                        style={{ flex: 1 }} 
                        type={this.state.type}
                        ref={(ref) => this.setCamera(ref)}
                    >
                        <View
                            style={{
                                flex: 1,
                                backgroundColor: 'transparent',
                                flexDirection: 'row'
                            }}
                        >
                            <TouchableOpacity style={styles.captureButton} onPress={() => this.snapPhoto()} />
                        </View>
                    </Camera>
                )}
            </View>
        );
    }
}

export default CameraComponent;
