import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDwB41p2F7gmWJXovqpRrMBsadlApXALE4",
  authDomain: "fir-d0d28.firebaseapp.com",
  projectId: "fir-d0d28",
  storageBucket: "fir-d0d28.appspot.com",
  messagingSenderId: "514752207883",
  appId: "1:514752207883:web:c61edfe905c13cb5f13b0e",
  measurementId: "G-1TDSPDFGM0"
};
  export default firebase.initializeApp(firebaseConfig);