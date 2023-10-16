import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAXITvlaxUKWJlPA7rATVzarIVr2SKGHSM",
    authDomain: "dump-it-now.firebaseapp.com",
    projectId: "dump-it-now",
    storageBucket: "dump-it-now.appspot.com",
    messagingSenderId: "424145624785",
    appId: "1:424145624785:web:35f115390d8b61a2ae6ff0",
    measurementId: "G-RQFXN1XPV4"
};

  
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();