import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Card, TextInput } from 'react-native-paper';
import { UserProps } from './types';
import NavigationService from '../navigation/NavigationService';

class Login extends React.Component<UserProps> {
    state = {
        email: '',
        password: ''
    }

    handleLogin = () => {
        const { email, password } = this.state

        if (email && password) {
            this.props.login(email, password);
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
                        <Button 
                            icon='login' 
                            style={styles.buttons} 
                            mode='contained' 
                            onPress={this.handleLogin}
                        >
                            Login
                        </Button>
                        <Button 
                            style={styles.buttons} 
                            onPress={() => NavigationService.navigate('SignUp')}
                        >
                            Don't have an account yet? Sign up
                        </Button>
                    </Card.Content>
                </Card>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    card: {
        height: '40%'
    },
    inputs: {
        marginVertical: 5
    },
    buttons: {
        marginVertical: 10
    }
})

export default Login;
