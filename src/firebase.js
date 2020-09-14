import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAmvPBYsAM_JvxeihxOqUOaXVNGlbz0Tlc",
    authDomain: "facebook-clone-11576.firebaseapp.com",
    databaseURL: "https://facebook-clone-11576.firebaseio.com",
    projectId: "facebook-clone-11576",
    storageBucket: "facebook-clone-11576.appspot.com",
    messagingSenderId: "440261744928",
    appId: "1:440261744928:web:f5306a6f8484d13270df45",
    measurementId: "G-FEHQLZDHX9"
  });

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export{auth,provider};
export default db;
