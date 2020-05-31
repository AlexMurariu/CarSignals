import React from "react";
import { View, Text, Modal, TouchableOpacity } from 'react-native'
import { styles } from "./PredictionDetailsComponentStyle";
import { PredictionDetailsProps } from "./types";
import { predictionNames, mainColor } from "../../constants";
import { MaterialCommunityIcons, FontAwesome5, AntDesign } from '@expo/vector-icons'; 

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
                        <TouchableOpacity style={styles.closeButton} onPress={() => this.props.toggleModal()}>
                            <AntDesign name="closecircleo" size={30} color={mainColor} />
                        </TouchableOpacity>
                        <View style={styles.iconContainer}>
                            {this.renderIcon(prediction.tagName)}
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}

export default PredictionDetailsComponent;