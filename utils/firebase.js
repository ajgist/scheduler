import * as firebase from "firebase";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBR1XxGstCHNrBM1mHbfdasNMITvxn-5aU",
  authDomain: "scheduler-e4429.firebaseapp.com",
  databaseURL: "https://scheduler-e4429.firebaseio.com",
  projectId: "scheduler-e4429",
  storageBucket: "scheduler-e4429.appspot.com",
  messagingSenderId: "900054956636",
  appId: "1:900054956636:web:cf6746d3ef8832e1950499",
  measurementId: "G-94MCK3ZD9D",
};

firebase.initializeApp(firebaseConfig);

export { firebase };
