import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAQ0EXOCKW4IgKjSdC7dL7tICAY08vnpKw',
  authDomain: 'direct-world.firebaseapp.com',
  databaseURL: 'https://direct-world.firebaseio.com',
  projectId: 'direct-world',
  storageBucket: 'direct-world.appspot.com',
  messagingSenderId: '314314670377',
  appId: '1:314314670377:web:a335d1ef43864595f6f738',
  measurementId: 'G-4LZT4FVSB6',
}

console.log('firebase init')

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
