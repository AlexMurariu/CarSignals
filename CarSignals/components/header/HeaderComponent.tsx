import React, { Component } from 'react'
import { View, Text, Modal, Alert } from 'react-native'
import { styles } from './HeaderComponentStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';
import NavigationService from '../../navigation/NavigationService';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';  
import { HeaderProps } from './types';
import { secondaryColor } from '../../constants';
import NetInfo from "@react-native-community/netinfo";
import { showAlert } from '../../utils';

export default class HeaderComponent extends Component<HeaderProps> {
    state = {
        displayDialog: false,
        noInternetConnection: false
    }

    componentDidMount() {
        NetInfo.addEventListener(state => {
            if (!state.isConnected) {
                showAlert('Error', 'No internet connection');
                this.setState({ noInternetConnection: !state.isConnected })
            }
        });

        if (this.props.user.error) {
            NavigationService.navigate("Login");
        }
    }
    
    logout = () => {
        this.props.clearPredictions();
        this.props.logout();
        NavigationService.navigate("Login");
        this.setState({ displayDialog: false });
    }

    getUsername(email: string) {
        if (!email) {
            return "";
        }

        const usernameParts = email.split('@');
        return usernameParts[0];
    }

    render() {
        if ((this.props.user.loadUserDone && !this.props.user.email) || this.state.noInternetConnection) {
            NavigationService.navigate("Login");
            return null;
        } 
        return (
            this.props.user.loadUserDone && this.props.user.email ?
            <View style={styles.header}>
                <TouchableOpacity style={styles.menuButton} onPress={() => NavigationService.openDrawer()}>
                    <FontAwesome name="bars" size={25} color={secondaryColor} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.account} onPress={() => this.logout()}>
                    <MaterialIcons name='account-circle' color={secondaryColor} size={25}/>
                    <Text style={styles.userText}>
                        {this.getUsername(this.props.user.email)}
                    </Text>
                </TouchableOpacity>
            </View> : null
        )
    }
}
