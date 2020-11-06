import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBEoXjZw9-L4wwSzO-NGrnLDuBbem5ENmc",
    authDomain: "crwn-db-583f9.firebaseapp.com",
    databaseURL: "https://crwn-db-583f9.firebaseio.com",
    projectId: "crwn-db-583f9",
    storageBucket: "crwn-db-583f9.appspot.com",
    messagingSenderId: "1028491519468",
    appId: "1:1028491519468:web:0a564c23f90da092394cc9",
    measurementId: "G-62FS268NLB"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore =firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

