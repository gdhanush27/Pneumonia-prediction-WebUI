import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZLDrYx_fyRpwakugfCuesmh2WTKluE0s",
  authDomain: "watchful-augury-376810.firebaseapp.com",
  projectId: "watchful-augury-376810",
  storageBucket: "watchful-augury-376810.appspot.com",
  messagingSenderId: "1057826426026",
  appId: "1:1057826426026:web:51b562a84b775401b054d3",
  measurementId: "G-ZE4RS3XHG0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};