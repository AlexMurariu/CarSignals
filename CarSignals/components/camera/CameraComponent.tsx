import React from 'react';
import { Text, View, TouchableOpacity, StatusBar } from 'react-native';
import { Image as RNImage } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { styles } from './CameraComponentStyle';
import { CameraProps } from './types';
import * as tf from '@tensorflow/tfjs'
import { bundleResourceIO } from '@tensorflow/tfjs-react-native'
import * as jpeg from 'jpeg-js';
import * as FileSystem from 'expo-file-system';
import * as ImagePicker from 'expo-image-picker';
import * as cvstfjs from '@microsoft/customvision-tfjs';

class CameraComponent extends React.Component<CameraProps> {
    state = {
      isTfReady: false,
      isModelReady: null,
      model: null,
      image: null,
      predictions: null
    }

    async componentDidMount() {
      await tf.ready();
      this.setState({ isTfReady: true });
      const modelJSON = require('../../assets/model/model.json');
      const modelWeights = require('../../assets/model/weights.bin');
      let modelCv = new cvstfjs.ObjectDetectionModel();
      await modelCv.loadModelAsync(bundleResourceIO(modelJSON, modelWeights));
      // const model = await tf.loadGraphModel(bundleResourceIO(modelJSON, modelWeights));

      this.setState({ 
        isModelReady: true,
        model: modelCv
      });
      
      this.props.getCameraPermission();
    }
    
    imageToTensor(rawImageData: any) {
      const TO_UINT8ARRAY: any = true
      const { width, height, data } = jpeg.decode(rawImageData, TO_UINT8ARRAY)
      const buffer = new Uint8Array(width * height * 3)
      let offset = 0;

      for (let i = 0; i < buffer.length; i += 3) {
        buffer[i] = data[offset]
        buffer[i + 1] = data[offset + 1]
        buffer[i + 2] = data[offset + 2]
  
        offset += 4
      }
    
      return tf.tensor3d(buffer, [width, height, 3])
    }

    classifyImage = async () => {
      try {
          const imageAssetPath = RNImage.resolveAssetSource(this.state.image)
          const response = await FileSystem.readAsStringAsync(imageAssetPath.uri, {
              encoding: FileSystem.EncodingType.Base64,
            });
          const imgBuffer = tf.util.encodeString(response, 'base64').buffer;
          const raw = new Uint8Array(imgBuffer);
          // const imageTensor = this.imageToTensor(raw);
          // const tensor = imageTensor.resizeNearestNeighbor([416, 416]).expandDims().toFloat();
          const url = 'https://southcentralus.api.cognitive.microsoft.com/customvision/v3.0/Prediction/8392ecee-fb13-405f-9e00-23d0fc32f0a1/detect/iterations/Iteration7/image';
          const respoonseCV = fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/octet-stream',
              'Prediction-Key': '470ca9a7e4324ad891e3869dcff21ca2'
            },
            body: imgBuffer
          }).then((response:any) => response.json()).then((data: any) => {
            console.log(data.predictions)
            }).catch((err) => console.log(err));
          // const result = await this.state.model.executeAsync(tensor);
          // console.log(result);
        } catch (error) {}
    }

    selectImage = async () => {
      try {
        let response: any = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3]
        })
  
        if (!response.cancelled) {
          const source = { uri: response.uri }
          this.setState({ image: source })
          this.classifyImage()
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

    renderCameraPage() {
      return (
        <View>
          <Text>Done</Text>
        </View>
      )
    }

    render() {
        const { isTfReady, isModelReady, predictions, image } = this.state
        const { camera } = this.props;
        return (
            <View>
              { camera === 'denied' ? this.renderNoPermissionWarning() : this.renderCameraPage() }
            </View>
        );
    }
}

export default CameraComponent;
