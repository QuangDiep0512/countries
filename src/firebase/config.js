import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyAwZO7HsZRXVqTv2XbpyLzTgY6eETVcjAI',
  authDomain: 'fir-app-country.firebaseapp.com',
  projectId: 'fir-app-country',
  storageBucket: 'fir-app-country.appspot.com',
  messagingSenderId: '191463496854',
  appId: '1:191463496854:web:77705b5b3a05f1934336b7',
  measurementId: 'G-385KS4MYT0',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
export default firebase;
