import React from "react";
import { View, Text, Modal, TouchableOpacity, ScrollView } from 'react-native'
import { styles } from "./PredictionDetailsComponentStyle";
import { PredictionDetailsProps } from "./types";
import { predictionNames, mainColor } from "../../constants";
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
                                <Text style={styles.textContent}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</Text>
                            </View>
                            <View>
                                <Text style={styles.header}>Solution:</Text>
                                <Text style={styles.textContent}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</Text>
                            </View>
                        </ScrollView >
                    </View>
                </Modal>
            </View>
        )
    }
}

export default PredictionDetailsComponent;