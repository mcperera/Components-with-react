import firebase from "firebase";
import firebaseApp from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBrDPyWQr-zDVbF709JKmhz6vdz0ZJbuaI",
  authDomain: "components-302307.firebaseapp.com",
  projectId: "components-302307",
  storageBucket: "components-302307.appspot.com",
  messagingSenderId: "116646016273",
  appId: "1:116646016273:web:092484b3f8a74f2f8348b0",
};

const fire = firebase.initializeApp(firebaseConfig);
const googleProvider = new firebaseApp.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

export default fire;
export { googleProvider, facebookProvider };
