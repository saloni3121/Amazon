import firebase from "firebase";


const firebaseConfig = firebase.initializeApp ({
    apiKey: "AIzaSyDfQ3Yr9KM3IOGTu7KpaGHUFcsXsSYKS18",
    authDomain: "fir-7d809.firebaseapp.com",
    projectId: "fir-7d809",
    storageBucket: "fir-7d809.appspot.com",
    messagingSenderId: "596094492210",
    appId: "1:596094492210:web:3fac137f6f02346951262b",
    measurementId: "G-KZNZ7WBFLB"
  });

// const db = firebaseApp.firestore();
const auth = firebase.auth();


export {auth};