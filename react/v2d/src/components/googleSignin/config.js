import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "Replace with actual",
  authDomain: "Replace with actual",
  projectId: "Replace with actual",
  storageBucket: "Replace with actual",
  messagingSenderId: "Replace with actual",
  appId: "Replace with actual",
  measurementId: "Replace with actual"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};