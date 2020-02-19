import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Button, Card, TextInput } from 'react-native-paper';
import { LoginUserProps } from './types';
import Toast from 'react-native-root-toast';
import NavigationService from '../../navigation/NavigationService';
import { styles } from './LoginComponentStyle';

export default class LoginComponent extends React.Component<LoginUserProps> {
    state = {
        email: '',
        password: ''
    }

    componentDidMount = () => {
        const { email, password } = this.props.user;
        
        if (email && password) {
            this.setState({email, password})
        }
    }

    showToaster = (error: string) => {
        Toast.show(error, {
            duration: 3000,
            shadow: true,
            animation: true,
            hideOnPress: true,
            position: 100,
            delay: 0,
        }) 
    }

    handleLogin = () => {
        const { email, password } = this.state

        if (email && password) {
            this.props.login(email, password);
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
                {error ? this.showToaster(error) : null}
                {loadUserInProgress ? <ActivityIndicator size="large" color="#000"/> : 
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
                }
            </View>
        )
    }
}