import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBH1VLN7jMF1igwVIlH9X9n8XezQNRYI1I",
    authDomain: "carsignals.firebaseapp.com",
    databaseURL: "https://carsignals.firebaseio.com",
    projectId: "carsignals",
    storageBucket: "carsignals.appspot.com",
    messagingSenderId: "904374988549",
    appId: "1:904374988549:web:9cd54831de9db75e41916c"
};

const Firebase = firebase.initializeApp(firebaseConfig)
export default Firebase;