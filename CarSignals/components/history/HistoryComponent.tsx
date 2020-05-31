import React from "react";
import { View, Text } from 'react-native'
import { styles } from "./HistoryComponentStyle";
import { HistoryProps } from "./types";
import { ActivityIndicator } from "react-native-paper";
import { mainColor } from "../../constants";

class HistoryComponent extends React.Component<HistoryProps> {
    render() {
        return (
          <View style={styles.container}>
          {this.props.loadUserInProgress ? <ActivityIndicator size="large" color={mainColor}/> :
              <Text>History {this.props.user.email}</Text>
          }
            </View>
        )
    }
}

export default HistoryComponent;