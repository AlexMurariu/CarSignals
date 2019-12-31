import { loginSuccess, loginFailed } from './../state/actions/authActions';
import Firebase from '../firebase.config';
import { Alert } from 'react-native';

class AuthService {
    static myInstance: AuthService;

    static getInstance() {
        if (!this.myInstance) {
            this.myInstance = new AuthService();
        }
        return this.myInstance;
    }

    loginUser(email: string, password: string): Promise<any> {
        return Firebase.auth()
                    .signInWithEmailAndPassword(email, password)
                    .then(() => { 
                        return loginSuccess(email, password);
                    })
                    .catch((error) => {
                        return loginFailed();
                    })
    }
}

export default AuthService.getInstance();