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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userReference = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userReference.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userReference.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userReference;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
