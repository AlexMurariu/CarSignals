import React from "react";
import { View, Text, Alert } from 'react-native'
import { styles } from "./GuideComponentStyle";
import { GuideProps } from "./types";
import { ActivityIndicator } from "react-native-paper";

class GuideComponent extends React.Component<GuideProps> {
    render() {
        return (
            <View style={styles.container}>
                {this.props.loadUserInProgress ? <ActivityIndicator size="large" color="#000"/> :
                    <Text>Guide {this.props.user.email}</Text>
                }
            </View>
        )
    }
}

export default GuideComponent;