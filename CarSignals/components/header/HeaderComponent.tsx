import React, { Component } from 'react'
import { View, Text, Modal, Alert } from 'react-native'
import { styles } from './HeaderComponentStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';
import NavigationService from '../../navigation/NavigationService';
import { IconButton, Button } from 'react-native-paper';
import { HeaderProps } from './types';
import Dialog, { DialogContent } from 'react-native-popup-dialog';

export default class HeaderComponent extends Component<HeaderProps> {
    state = {
        displayDialog: false
    }

    componentDidMount() {
        if (this.props.user.error) {
            NavigationService.navigate("Login");
        }
    }
    
    logout = () => {
        this.props.logout();
        NavigationService.navigate("Login");
        this.setState({ displayDialog: false });
    }

    render() {
        if (this.props.user.loadUserDone && !this.props.user.email) {
            NavigationService.navigate("Login");
        }
        return (
            this.props.user.loadUserDone && this.props.user.email ?
            <View style={styles.header}>
                <TouchableOpacity onPress={() => NavigationService.openDrawer()}>
                    <IconButton icon='view-headline'/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.account} onPress={() => this.logout()}>
                    <IconButton icon='account-circle'/>
                    <Text>
                        {this.props.user.email}
                    </Text>
                </TouchableOpacity>
                </View> : null
        )
    }
}
