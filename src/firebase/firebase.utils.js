import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBbqo2-5JNEuje5FpgELY_Qe_gEnTw0fOM",
  authDomain: "clthng-store.firebaseapp.com",
  databaseURL: "https://clthng-store.firebaseio.com",
  projectId: "clthng-store",
  storageBucket: "clthng-store.appspot.com",
  messagingSenderId: "588984577852",
  appId: "1:588984577852:web:c56e2b1bffeeac9d9c3839"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
