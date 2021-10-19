import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBPrrxjFM98XcuH1c5lGoYquYDwYwoeXf4",
  authDomain: "clone-portfolio-d38d1.firebaseapp.com",
  projectId: "clone-portfolio-d38d1",
  storageBucket: "clone-portfolio-d38d1.appspot.com",
  messagingSenderId: "319294346021",
  appId: "1:319294346021:web:1fe9d36720bb8fd1ed80cc"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();

export default db