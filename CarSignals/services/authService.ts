import { loginSuccess, loginFailed, signUpSuccess, signUpFailed  } from './../state/actions';
import Firebase from '../firebase.config';

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

    signUpUser(email: string, password: string): Promise<any> {
        return Firebase.auth()
                    .createUserWithEmailAndPassword(email, password)
                    .then(() => {
                        return signUpSuccess(email, password);
                    })
                    .catch((error) => {
                        return signUpFailed();
                    })
    }
}

export default AuthService.getInstance();