import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  //  config here
});

var db = firebaseApp.firestore();

export { db };