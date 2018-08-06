import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyDlNGgnELFl4UELWtsokb5pzkx6Er5ZlIc",
    authDomain: "visioncustoms-212212.firebaseapp.com",
    databaseURL: "https://visioncustoms-212212.firebaseio.com",
    projectId: "visioncustoms-212212",
    storageBucket: "visioncustoms-212212.appspot.com",
    messagingSenderId: "1035888267850"
};
firebase.initializeApp(config);
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const firebaseAuth = firebase.auth;
export const db = firebase.firestore().settings({ timestampsInSnapshots: true });