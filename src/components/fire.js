import firebase from 'firebase'; 

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDPkpJgqH3b8bLLVvQantlHlrgaDPrRBMI",
    authDomain: "antidoping-19f37.firebaseapp.com",
    databaseURL: "https://antidoping-19f37.firebaseio.com",
    projectId: "antidoping-19f37",
    storageBucket: "antidoping-19f37.appspot.com",
    messagingSenderId: "973089851614",
    appId: "1:973089851614:web:bcaa921f731fc9572d5a4f",
    measurementId: "G-E2YTCBZQT0"
  };
  // Initialize Firebase
  const fire=firebase.initializeApp(firebaseConfig);
  firebase.analytics();
export default fire;