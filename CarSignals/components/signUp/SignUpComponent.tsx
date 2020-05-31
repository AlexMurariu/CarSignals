import React from 'react'
import { View } from 'react-native'
import { Button, Card, TextInput, ActivityIndicator } from 'react-native-paper';
import { styles } from './SignUpComponentStyle';
import { SignUpUserProps } from './types';
import Toast from 'react-native-root-toast';
import NavigationService from '../../navigation/NavigationService';
import { showToaster } from '../../utils';
import { mainColor } from '../../constants';

export default class SignupComponent extends React.Component<SignUpUserProps> {
    state = {
        email: '',
        password: '',
        confirmPassowrd: ''
    }

    handleSignUp = () => {
        const { email, password } = this.state

        if (email && password) {
            this.props.signUp(email, password);
            NavigationService.navigate('History');
        }
    }

    render() {
        const {
            user: { error },
            loadUserInProgress,
        } = this.props;
        return (
            <View style={styles.container}>
                {error ? showToaster(error, 3000) : null}
                {loadUserInProgress ? <ActivityIndicator size="large" color={mainColor}/> :
                <Card style={styles.card}>
                    <Card.Content>
                        <TextInput
                            style={styles.inputs}
                            mode='outlined'
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })}
                            placeholder='Email'
                            autoCapitalize='none'
                        />
                        <TextInput
                            style={styles.inputs}
                            mode='outlined'
                            value={this.state.password}
                            onChangeText={password => this.setState({ password })}
                            placeholder='Password'
                            secureTextEntry={true}
                        />
                        <TextInput
                            style={styles.inputs}
                            mode='outlined'
                            value={this.state.confirmPassowrd}
                            onChangeText={confirmPassowrd => this.setState({ confirmPassowrd })}
                            placeholder='Confirm password'
                            secureTextEntry={true}
                        />
                        <Button 
                            icon='account-plus' 
                            style={styles.buttons} 
                            mode='contained'  
                            onPress={this.handleSignUp}
                        >
                            Sign up
                        </Button>
                        <Button 
                            style={styles.buttons} 
                            onPress={() => NavigationService.navigate('Login')}
                        >
                            Already have an account? Login
                        </Button>
                    </Card.Content>
                </Card>
                }
            </View>
        )
    }
}