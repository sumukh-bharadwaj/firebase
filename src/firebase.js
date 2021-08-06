import firebase from 'firebase/app'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyDAv8y184TJD17TZSGiMjAEsGF-8b2chZw",
  authDomain: "fir-react-36238.firebaseapp.com",
  projectId: "fir-react-36238",
  storageBucket: "fir-react-36238.appspot.com",
  messagingSenderId: "989928538623",
  appId: "1:989928538623:web:dd6c9d296afab307fb27ca",
  measurementId: "G-Y7VP34TESN"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export default firebase
