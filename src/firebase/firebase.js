import { initializeApp } from "firebase/app";
import{ getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';



const firebaseConfig = {
  apiKey: "AIzaSyACvqtdw960VgA_8GBpwbv4WBcO3ThE-h0",
  authDomain: "ng-complete-guide-88426.firebaseapp.com",
  databaseURL: "https://ng-complete-guide-88426.firebaseio.com",
  projectId: "ng-complete-guide-88426",
  storageBucket: "ng-complete-guide-88426.appspot.com",
  messagingSenderId: "298987731852",
  appId: "1:298987731852:web:568d5709910af0f3d974a9",
  measurementId: "G-GKVPG9N1CY"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);


export default app;