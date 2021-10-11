import firebase from "firebase";
// import "@firebase/auth";
// import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0oEzjv3RkQyY0BP5TQ8Q3FefkUkfoSgg",
  authDomain: "clone-ed14d.firebaseapp.com",
  projectId: "clone-ed14d",
  storageBucket: "clone-ed14d.appspot.com",
  messagingSenderId: "801214764696",
  appId: "1:801214764696:web:a8c0e54873719c3847e2ed",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };

export default firebase;
