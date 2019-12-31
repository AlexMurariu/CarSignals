import React from 'react'
import { View } from 'react-native'
import { Button, Card, TextInput } from 'react-native-paper';
import { styles } from './SignUpComponentStyle';
import { SignUpUserProps } from './types';
import NavigationService from '../../navigation/NavigationService';

export default class SignupComponent extends React.Component<SignUpUserProps> {
    state = {
        email: '',
        password: '',
        confirmPassowrd: ''
    }

    componentDidMount = () => {
        const { email, password } = this.props.user;
        
        if (email && password) {
            this.setState({email, password})
        }
    }

    handleSignUp = () => {
        const { email, password } = this.state

        if (email && password) {
            this.props.signUp(email, password);
            NavigationService.navigate('Home');
        }
    }

    render() {
        return (
            <View style={styles.container}>
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
            </View>
        )
    }
}