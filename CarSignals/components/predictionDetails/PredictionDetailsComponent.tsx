import React from "react";
import { View, Text, Modal, TouchableOpacity, ScrollView } from 'react-native'
import { styles } from "./PredictionDetailsComponentStyle";
import { PredictionDetailsProps } from "./types";
import { predictionNames, mainColor, predictionTexts } from "../../constants";
import { MaterialCommunityIcons, FontAwesome5, AntDesign, Feather } from '@expo/vector-icons';
import { showAlert } from "../../utils";

class PredictionDetailsComponent extends React.Component<PredictionDetailsProps> {
    state = {
        modalVisible: false
    }

    renderIcon(tagName: string) {
        if (tagName === predictionNames.BATTERY) {
            return <FontAwesome5 name="car-battery" size={80} color={mainColor} />;
        } else if (tagName === predictionNames.COOLANT) {
            return <MaterialCommunityIcons name="coolant-temperature" size={80} color={mainColor} />;
        } else if (tagName === predictionNames.ENGINE) {
            return <MaterialCommunityIcons name="engine" size={80} color={mainColor} />;
        } else if (tagName === predictionNames.OIL) {
            return <FontAwesome5 name="oil-can" size={80} color={mainColor} />;
        }
    }

    render() {
        const { showModal, prediction } = this.props;

        return (
            <View>
                <Modal animationType="fade" transparent={false} visible={showModal}>
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.infoButton} onPress={() => showAlert('Info', 'Please check with a qualified person before trying anything provided in the information bellow. This is just to give an idea of the problem you are experiencing!')}>
                            <Feather name="info" size={30} color={mainColor} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.closeButton} onPress={() => this.props.toggleModal()}>
                            <AntDesign name="closecircleo" size={30} color={mainColor} />
                        </TouchableOpacity>
                        <View style={styles.iconContainer}>
                            {this.renderIcon(prediction.tagName)}
                        </View>
                        <Text style={styles.detectionDateText}>Detected at {prediction.predictionDate}</Text>
                        <ScrollView  style={styles.textContainer} keyboardShouldPersistTaps='always' showsVerticalScrollIndicator={false}>
                            <View style={styles.causeContainer}>
                                <Text style={styles.header}>Cause:</Text>
                                <Text style={styles.textContent}>{predictionTexts[prediction.tagName].cause}</Text>
                            </View>
                            <View>
                                <Text style={styles.header}>Solution:</Text>
                                <Text style={styles.textContent}>{predictionTexts[prediction.tagName].solution}</Text>
                            </View>
                        </ScrollView >
                    </View>
                </Modal>
            </View>
        )
    }
}

export default PredictionDetailsComponent;