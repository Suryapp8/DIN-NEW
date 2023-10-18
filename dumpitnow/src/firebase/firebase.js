import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDD1pzlea_PtW49VJAgYlHdEb3sXn7l1EQ",
  authDomain: "dump-it-now-c70e5.firebaseapp.com",
  projectId: "dump-it-now-c70e5",
  storageBucket: "dump-it-now-c70e5.appspot.com",
  messagingSenderId: "307814310131",
  appId: "1:307814310131:web:0a216840c527578259d786",
  measurementId: "G-BL8PPV4KDR"
};

  
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();