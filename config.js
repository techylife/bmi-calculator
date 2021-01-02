import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBafeEst2knOQtOZoEs2BVtqqApDn7At0M",
  authDomain: "bmi-calculator-42fb7.firebaseapp.com",
  projectId: "bmi-calculator-42fb7",
  storageBucket: "bmi-calculator-42fb7.appspot.com",
  messagingSenderId: "893677301999",
  appId: "1:893677301999:web:dff4a394a47b13e6ca2b1a"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
