import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { styles } from './CameraComponentStyle';
import { CameraProps } from './types';
import * as tf from '@tensorflow/tfjs'
import * as FileSystem from 'expo-file-system';
import * as ImagePicker from 'expo-image-picker';
import * as cvstfjs from '@microsoft/customvision-tfjs';
import { bundleResourceIO } from '@tensorflow/tfjs-react-native';
import { IPrediction } from '../../state/reducers/predictionReducer';
import { TakePictureComponent } from '../takePictureComponent';

class CameraComponent extends React.Component<CameraProps> {
    state = {
      isTfReady: false,
      isModelReady: false,
      image: null,
      predictions: null,
      cameraMode: false
    }

    async componentDidMount() {
      await tf.ready();
      this.setState({ isTfReady: true });
      const modelJSON = require('../../assets/model/model.json');
      const modelWeights = require('../../assets/model/weights.bin');
      let modelCv = new cvstfjs.ObjectDetectionModel();
      await modelCv.loadModelAsync(bundleResourceIO(modelJSON, modelWeights));
      this.setState({ isModelReady: true });
      this.props.getCameraPermission();
    }

    async detectObjects() {
      try {
          const imageAssetPath = Image.resolveAssetSource(this.state.image)
          const response = await FileSystem.readAsStringAsync(imageAssetPath.uri, {
              encoding: FileSystem.EncodingType.Base64,
            });
          const imgBuffer = tf.util.encodeString(response, 'base64');
          this.props.getPredictions(imgBuffer);
      } catch (error) {}
    }

    async selectImage() {
      try {
        let image: any = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3]
        })
  
        if (!image.cancelled) {
          const source = { uri: image.uri }
          this.setState({ image: source })
          this.detectObjects()
        }
      } catch (error) {}
    }

    renderNoPermissionWarning() {
      return (
        <View>
          <Text>In order to use this functionality please allow camera access!</Text>
        </View>
      )
    }

    takePhoto(image: any) {
      this.setState({ 
        cameraMode: false,
        image: { uri: image.uri }
      });
      this.detectObjects();
    }

    renderCameraPage() {
      const { loadPredictionsInProgress, predictions } = this.props;
      const { image } = this.state;
      
      return (
        <View style={styles.content}>
            <TouchableOpacity style={styles.imageWrapper} onPress={() => this.selectImage()}>
              { image ? <Image source={image} style={styles.imageContainer} /> : <Text>Choose from gallery.</Text>}
            </TouchableOpacity>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity style={styles.takePhotoButton} onPress={() => this.setState({ cameraMode: true })}>
                <Text style={styles.takePhotoButtonText}>Take photo</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.takePhotoButton} onPress={() => this.props.clearPredictions()}>
                <Text style={styles.takePhotoButtonText}>Clear predictions</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.predictionsContainer}>
              { !loadPredictionsInProgress ? this.renderPrediction(predictions) : <ActivityIndicator size="large" color="#000"/> }
            </View>
        </View>
      )
    }

    renderPrediction = (predictions: IPrediction[]) => {
      return (
        <View>
          { 
            predictions &&
              (predictions.length ? predictions.map((prediction: IPrediction) => {
                return (
                  <Text key={prediction.tagName}>{prediction.tagName}</Text>
                )
              }) : 
              <Text>No dashboard light was found. Try to take a photo from a closer distance or load one from gallery.</Text>) 
          }
          <Text>
            {
              predictions && 
                (predictions.length ? 
                  <Text style={styles.notGoodEnoughMessage}>
                    If you are not pleased with the prediction result, please try again from a closer distance or try to load a picture from gallery.
                  </Text> : null)
            }
          </Text>
        </View>
      )
    }

    render() {
        const { camera } = this.props;
        const { isTfReady, isModelReady, cameraMode } = this.state;
        if (cameraMode) {
          return (
            <TakePictureComponent camera={camera} takePhoto={(image: any) => this.takePhoto(image)}/>
          );
        } else {
          return (
            <View style={styles.container}>
              { 
                isModelReady && isTfReady ? 
                (camera === "denied" ? this.renderNoPermissionWarning() : this.renderCameraPage()) : 
                <View style={styles.loadingContainer}>
                  <ActivityIndicator style={styles.activityLoader} color="#000" size="large"/>
                  <Text>Please wait for the model to load.</Text> 
                </View>
              }
            </View>
          );
        }
    }
}

export default CameraComponent;