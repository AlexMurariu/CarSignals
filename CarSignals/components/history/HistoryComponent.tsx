import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { styles } from "./HistoryComponentStyle";
import { HistoryProps } from "./types";
import { ActivityIndicator } from "react-native-paper";
import { mainColor, secondaryColor } from "../../constants";
import Firebase from '../../firebase.config';
import { YellowBox } from 'react-native';
import { PredictionCardComponent } from "../predictionCard";
import { NavigationEvents } from 'react-navigation';
import { AntDesign } from '@expo/vector-icons'; 

YellowBox.ignoreWarnings(['Setting a timer']);

class HistoryComponent extends React.Component<HistoryProps> {
    state = {
        lastWeekActive: false,
        lastMonthActive: false,
        lastYearActive: false,
        filteredList: []
    }

    componentDidMount() {
        const { user } = this.props;
        this.props.getHistory(user.uid);
    }

    deletePrediction(predictionKey: string) {
        this.props.deleteDetectedSignal(predictionKey);
        Firebase.database().ref(`/history/${this.props.user.uid}`)
            .child(predictionKey)
            .remove();
    }

    filterByLastWeek() {
        this.setState({ 
            lastWeekActive: !this.state.lastWeekActive,
            lastMonthActive: false,
            lastYearActive: false
         })
    }

    filterByLastMonth() {
        this.setState({ 
            lastWeekActive: false,
            lastMonthActive: !this.state.lastMonthActive,
            lastYearActive: false
         })
    }

    filterByLastYear() {
        this.setState({ 
            lastWeekActive: false,
            lastMonthActive: false,
            lastYearActive: !this.state.lastYearActive
         })
    }

    renderHistory() {
        const { lastWeekPredictions, lastMonthPredictions, lastYearPredictions } = this.props;
        let history = this.props.history;
        const { lastWeekActive, lastMonthActive, lastYearActive } = this.state;

        if (!history || !history.length) {
            return <Text style={styles.noItmesMessage}>No itmes in history.</Text>
        }

        if (lastWeekActive) {
            history = lastWeekPredictions;
        } else if (lastMonthActive) {
            history = lastMonthPredictions;
        } else if (lastYearActive) {
            history = lastYearPredictions;
        }

        return history.map((prediction: any) => {
            return (
                <PredictionCardComponent 
                    key={prediction.uid} 
                    deleteOption={true} 
                    prediction={prediction} 
                    deletePrediction={(predictionKey: string) => this.deletePrediction(predictionKey)}
                />
            )
        })
    }

    render() {
        return (
          <View style={styles.container}>
            {this.props.loadHistoryInProgress ? <ActivityIndicator size="large" color={mainColor}/> :
               <View style={styles.predictionsContainer}>
                <View style={styles.filterContainer}>
                    <TouchableOpacity style={styles.filterButton} onPress={() => this.filterByLastWeek()}>
                        <Text style={styles.filterButtonText}>Last Week</Text>
                        { this.state.lastWeekActive && <AntDesign name="checkcircle" size={25} color={secondaryColor} /> }
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filterButton} onPress={() => this.filterByLastMonth()}>
                        <Text style={styles.filterButtonText}>Last month</Text>
                        { this.state.lastMonthActive && <AntDesign name="checkcircle" size={25} color={secondaryColor} /> }
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filterButton} onPress={() => this.filterByLastYear()}>
                        <Text style={styles.filterButtonText}>Last Year</Text>
                        { this.state.lastYearActive && <AntDesign name="checkcircle" size={25} color={secondaryColor} /> }
                    </TouchableOpacity>
                </View>
                <ScrollView keyboardShouldPersistTaps='always' showsVerticalScrollIndicator={false}>
                 <NavigationEvents onDidFocus={() => this.props.getHistory(this.props.user.uid)}/>
                 {this.renderHistory()}
                </ScrollView>
               </View>
            }
          </View>
        )
    }
}

export default HistoryComponent;