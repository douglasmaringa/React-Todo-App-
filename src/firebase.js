import  firebase from 'firebase';

const firebaseApp  = firebase.initializeApp({
  
    apiKey: "AIzaSyAeZortXp-rl-CFT_J7mxzElhlFURoJmX8",
    authDomain: "auth-d7076.firebaseapp.com",
    databaseURL: "https://auth-d7076.firebaseio.com",
    projectId: "auth-d7076",
    storageBucket: "auth-d7076.appspot.com",
    messagingSenderId: "1041688889589",
    appId: "1:1041688889589:web:f8377ff719f0b93fed1dbc"
  
});
  
const db = firebaseApp.firestore();

export default db;
