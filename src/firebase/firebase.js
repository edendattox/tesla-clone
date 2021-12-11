// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFgWBAHTpqL9e1MIEkc78tyYUl5tb3CBk",
  authDomain: "tesla-clone-7a0ad.firebaseapp.com",
  projectId: "tesla-clone-7a0ad",
  storageBucket: "tesla-clone-7a0ad.appspot.com",
  messagingSenderId: "1042903479295",
  appId: "1:1042903479295:web:6c8414aa87be8e76c42dca",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();

export { auth };
