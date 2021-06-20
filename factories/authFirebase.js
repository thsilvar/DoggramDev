import firebase from "firebase/app";
import "firebase/firebase-database";
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCgJ8qkqmHMZlQ6-EwknMHVTVrdAvwWVJA",
    authDomain: "doggram-1990b.firebaseapp.com",
    databaseURL: "https://doggram-1990b-default-rtdb.firebaseio.com",
    projectId: "doggram-1990b",
    storageBucket: "doggram-1990b.appspot.com",
    messagingSenderId: "441089944763",
    appId: "1:441089944763:web:8fa7435263e8fe1906cd9e",
    measurementId: "G-N0697PRJ3L"
};

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export  const singInWithGoogle = () => auth.signInWithPopup(provider);