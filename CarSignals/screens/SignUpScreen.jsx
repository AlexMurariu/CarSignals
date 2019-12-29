import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Card, TextInput } from 'react-native-paper';
import Firebase from '../firebase.config';

class Signup extends React.Component {
    state = {
        email: '',
        password: '',
        confirmPassowrd: ''
    }

    handleSignUp = () => {
        const { email, password } = this.state
        Firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => this.props.navigation.navigate('Home'))
            .catch(error => console.log(error))
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
                            onPress={() => this.props.navigation.navigate('Login')}
                        >
                            Already have an account? Login
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
        height: '50%'
    },
    inputs: {
        marginVertical: 5,
    },
    buttons: {
        marginVertical: 10
    }
})

export default Signup