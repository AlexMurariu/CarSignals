import React from "react";
import { PredictionCardProps } from "./types";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./PredictionCardComponentStyle"; 
import { PredictionDetailsComponent } from "../predictionDetails";
import { predictionNames } from "../../constants";
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons'; 

class PredictionCardComponent extends React.Component<PredictionCardProps> {
    state = {
        showModal: false
    }

    toggleModal() {
        this.setState({ showModal: !this.state.showModal })
    }

    getNameWithUppercase(tagName) {
        return tagName.charAt(0).toUpperCase() + tagName.slice(1)
    }

    renderIcon(tagName: string) {
        if (tagName === predictionNames.BATTERY) {
            return <FontAwesome5 name="car-battery" size={50} color="white" />;
        } else if (tagName === predictionNames.COOLANT) {
            return <MaterialCommunityIcons name="coolant-temperature" size={50} color="white" />;
        } else if (tagName === predictionNames.ENGINE) {
            return <MaterialCommunityIcons name="engine" size={50} color="white" />;
        } else if (tagName === predictionNames.OIL) {
            return <FontAwesome5 name="oil-can" size={50} color="white" />;
        }
    }

    render() {
        const { prediction } = this.props;
        const { showModal } = this.state;

        return (
            <TouchableOpacity key={prediction.tagId} style={styles.container} onPress={() => this.toggleModal()}>
                <View style={styles.nameContainer}>
                    {this.renderIcon(prediction.tagName)}
                    <Text style={styles.nameText}>{this.getNameWithUppercase(prediction.tagName)}</Text>
                </View>
                <Text style={styles.dateText} key={prediction.tagName}>{prediction.predictionDate}</Text>
                <PredictionDetailsComponent showModal={showModal} toggleModal={() => this.toggleModal()} prediction={prediction}/>
            </TouchableOpacity>
        );
    }
}

export default PredictionCardComponent;