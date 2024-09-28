import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/messaging";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDD1pzlea_PtW49VJAgYlHdEb3sXn7l1EQ",
  authDomain: "dump-it-now-c70e5.firebaseapp.com",
  projectId: "dump-it-now-c70e5",
  storageBucket: "dump-it-now-c70e5.appspot.com",
  messagingSenderId: "307814310131",
  appId: "1:307814310131:web:0a216840c527578259d786",
  measurementId: "G-BL8PPV4KDR",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const firestore = firebaseApp.firestore();

// Firebase messaging for FCM
const messaging = firebaseApp.messaging();

// Request permission for notifications
const requestNotificationPermission = async () => {
  try {
    await messaging.requestPermission();
    const token = await messaging.getToken();
    console.log("FCM Token:", token);
    return token;
  } catch (error) {
    console.error("Unable to get permission to notify.", error);
  }
};

// Export FieldValue for serverTimestamp usage
const FieldValue = firebase.firestore.FieldValue;

// Export all initialized Firebase services
export { firestore, FieldValue, messaging, requestNotificationPermission };
