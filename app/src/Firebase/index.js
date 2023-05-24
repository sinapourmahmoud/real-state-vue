// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOXWAVcnxmFzmQp_rg7JI0kJvt3IBd0BA",
  authDomain: "real-estate-fc44e.firebaseapp.com",
  projectId: "real-estate-fc44e",
  storageBucket: "real-estate-fc44e.appspot.com",
  messagingSenderId: "325895487861",


  
  appId: "1:325895487861:web:eafca54c44f80a6c86533c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)


export {auth}
