import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";

if (!firebase.apps.length) {
  // Paste your config object here ⬇️
  const firebaseConfig = {
    apiKey: "AIzaSyAF0xc5kPC5dkSQvJhfVCbX2sVfTN_eYCQ",
    authDomain: "casame-app.firebaseapp.com",
    projectId: "casame-app",
    storageBucket: "casame-app.appspot.com",
    messagingSenderId: "388380745018",
    appId: "1:388380745018:web:60c4269d764a9acdcc8403",
    measurementId: "G-XF8LS8E7MD"
  };

  firebase.initializeApp(firebaseConfig);
} else {
  // if already initialized, use that one
  firebase.app();
}

export const auth = firebase.auth();

export const firebaseStorage = firebase.storage();

export function signInWithGoogle() {
  const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();

  return auth.signInWithPopup(GoogleAuthProvider);
}

export function signInWithEmailAndPassword(email, password) {
  return auth.signInWithEmailAndPassword(email, password);
}

export function signUpWithEmailAndPassword(email, password) {
  return auth.createUserWithEmailAndPassword(email, password);
}

export function sendPasswordResetEmail(email) {
  return auth.sendPasswordResetEmail(email);
}

export function firebaseSignout() {
  return auth.signOut();
}

export function getCurrentUserToken() {
  if (!auth.currentUser) {
    return null;
  }

  return auth.currentUser.getIdToken();
}

export function getCurrentUserEmail() {
  if (!auth.currentUser) {
    return null;
  }

  return auth.currentUser.email;
}