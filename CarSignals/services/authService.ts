import { logoutSuccess, logoutFailed } from './../state/actions/authActions';
import { loginSuccess, loginFailed, signUpSuccess, signUpFailed  } from './../state/actions';
import Firebase from '../firebase.config';
import NavigationService from '../navigation/NavigationService';

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
                        return loginFailed(error.message);
                    })
    }

    signUpUser(email: string, password: string): Promise<any> {
        return Firebase.auth()
                    .createUserWithEmailAndPassword(email, password)
                    .then(() => {
                        return signUpSuccess(email, password);
                    })
                    .catch((error) => {
                        return signUpFailed(error.message);
                    })
    }

    logoutUser(): Promise<any> {
        return Firebase.auth().
                    signOut().then(() => {
                        NavigationService.navigate('Login');
                        return logoutSuccess();
                    })
                    .catch((error) => {
                        return logoutFailed();
                    })
    } 
}

export default AuthService.getInstance();