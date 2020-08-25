import firebase from 'firebase/app';
import  'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyDH670i2_5kyeKVjQVhv2Yue7RW-56ltkc",
    authDomain: "store-758e0.firebaseapp.com",
    databaseURL: "https://store-758e0.firebaseio.com",
    projectId: "store-758e0",
    storageBucket: "store-758e0.appspot.com",
    messagingSenderId: "904413314236",
    appId: "1:904413314236:web:ebfe9cb2c051bde165a4b9",
    measurementId: "G-DEX9L6JF0S"
  }
  firebase.initializeApp(config)
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWidthGoogle= () =>auth.signInWithPopup(provider);
  export default firebase;
