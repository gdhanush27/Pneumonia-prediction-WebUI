import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAp_PN7Pr8vF8EsaZtZVo75zaeDc0D02tQ",
  authDomain: "pneumonia-pred-gdhanush270.firebaseapp.com",
  projectId: "pneumonia-pred-gdhanush270",
  storageBucket: "pneumonia-pred-gdhanush270.appspot.com",
  messagingSenderId: "529901418281",
  appId: "1:529901418281:web:c9a4cb955bbb29fdec2938",
  measurementId: "G-RZ9EP3XS7X"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};