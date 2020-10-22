import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
// env
import {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_DATABASEURL,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID,
  FIREBASE_MEASUREMENT_ID,
} from '@env'

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  databaseURL: FIREBASE_DATABASEURL,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
  measurementId: FIREBASE_MEASUREMENT_ID,
}

console.log('--- firebase init ---')

// Initialize Firebase App

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}
// firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()

export const loginWithEmail = (email: string, password: string) =>
  auth.signInWithEmailAndPassword(email, password)

export const registerWithEmail = (email: string, password: string) =>
  auth.createUserWithEmailAndPassword(email, password)

export const logout = () => auth.signOut()

export const passwordReset = (email: string) => auth.sendPasswordResetEmail(email)
