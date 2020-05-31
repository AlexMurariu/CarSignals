import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { styles } from './TakePictureComponentStyle';
import { TakePhotoProps } from './types';
import { Camera } from 'expo-camera';
import { Col, Grid } from "react-native-easy-grid";
import { Ionicons } from '@expo/vector-icons';
import * as MediaLibrary from 'expo-media-library';
import { showToaster } from '../../utils';
import * as Permissions from 'expo-permissions';

class TakePictureComponent extends React.Component<TakePhotoProps> {
    camera = null;
    state = {
        image: null,
        flashMode: Camera.Constants.FlashMode.off,
        cameraType: Camera.Constants.Type.back
    }

    async componentDidMount() {
        const camera = await Permissions.askAsync(Permissions.CAMERA);

        if (camera.status === 'denied') {
            this.props.goBack();
        }   
    }

    setFlashMode() {
        const { on, off } = Camera.Constants.FlashMode;
        this.setState({ flashMode: this.state.flashMode === on ? off : on  })
    }

    async takeCapture() {
        const image = await this.camera.takePictureAsync();
        const asset = await MediaLibrary.createAssetAsync(image.uri);

        MediaLibrary.createAlbumAsync('C-CT Scan', asset)
            .then(() => showToaster("Picture saved in gallery"))
            .catch(() => showToaster("Something happend while taking the picture. Please try again."));

        this.props.takePhoto(image);
    }

    render() {
        const { flashMode } = this.state;

        return (
            <View style={styles.container}>
                <Camera
                    style={styles.preview}
                    flashMode={flashMode}
                    pictureSize='1280x720'
                    ref={camera => this.camera = camera}
                />
                <Grid style={styles.bottomToolbar}>
                    <Col style={styles.alignCenter}>
                        <TouchableOpacity onPress={() => this.setFlashMode()}>
                            <Ionicons
                                name={flashMode == Camera.Constants.FlashMode.on ? "md-flash" : 'md-flash-off'}
                                color="white"
                                size={30}
                            />
                        </TouchableOpacity>
                    </Col>
                    <Col size={2} style={styles.alignCenter}>
                        <TouchableOpacity onPress={() => this.takeCapture()}>
                            <View style={styles.buttonContainer}>
                                <View style={styles.buttonContent} />
                            </View>
                        </TouchableOpacity>
                    </Col>
                    <Col style={styles.alignCenter}>
                        <TouchableOpacity onPress={() => this.props.goBack()}>
                            <Ionicons
                                name={"md-arrow-back"}
                                color="white"
                                size={30}
                            />
                        </TouchableOpacity>
                    </Col>
                </Grid>
            </View>
        );
    }
}

export default TakePictureComponent;