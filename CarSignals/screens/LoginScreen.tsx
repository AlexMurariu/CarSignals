import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Button, Card, TextInput } from 'react-native-paper';
import Firebase from '../firebase.config';
import { UserProps } from './types';
import NavigationService from '../navigation/NavigationService';

class Login extends React.Component<UserProps> {
    state = {
        email: '',
        password: ''
    }

    handleLogin = () => {
        const { email, password } = this.state
        this.props.login(email, password);
        // Alert.alert(this.props.user.email, this.props.user.password);
        // Firebase.auth()
        //     .signInWithEmailAndPassword(email, password)
        //     .then(() => NavigationService.navigate('Home'))
        //     .catch(error => console.log(error))
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
