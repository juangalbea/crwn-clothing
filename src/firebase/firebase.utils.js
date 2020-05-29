import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBj7JF6nfRk415U3kSM5hggC5_MJdTWBMU",
  authDomain: "crwn-db-1bbdc.firebaseapp.com",
  databaseURL: "https://crwn-db-1bbdc.firebaseio.com",
  projectId: "crwn-db-1bbdc",
  storageBucket: "crwn-db-1bbdc.appspot.com",
  messagingSenderId: "773611077703",
  appId: "1:773611077703:web:33386f6c2886cc228c7162",
  measurementId: "G-YRKKQEJPK6"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;