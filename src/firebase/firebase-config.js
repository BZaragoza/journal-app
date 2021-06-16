import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'; 

const firebaseConfig = {
  apiKey: 'AIzaSyARarLaPkmF6_TmxGFAPwPWThgqYmlEgaI',
  authDomain: 'react-course-2fa3f.firebaseapp.com',
  databaseURL: 'https://react-course-2fa3f.firebaseio.com',
  projectId: 'react-course-2fa3f',
  storageBucket: 'react-course-2fa3f.appspot.com',
  messagingSenderId: '596239964125',
  appId: '1:596239964125:web:f12b754b037a001580483'
};

firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
  db,
  googleAuthProvider,
  firebase
}