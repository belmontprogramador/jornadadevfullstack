 import { initializeApp } from "firebase/app";
 import {getFirestore} from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyDgx217T4Ag0TA8efCc54F7CY1AVsvOlyw",
  authDomain: "tiktok---jornada-42f55.firebaseapp.com",
  projectId: "tiktok---jornada-42f55",
  storageBucket: "tiktok---jornada-42f55.appspot.com",
  messagingSenderId: "246977975649",
  appId: "1:246977975649:web:409706fdf0617979a02120"
};

 
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;