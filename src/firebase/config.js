import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyBk3Vu7Xfp_4zsD-lmnQZ3SHyXDbuJ0hMk",
    authDomain: "crypto-investment-limited.firebaseapp.com",
    projectId: "crypto-investment-limited",
    storageBucket: "crypto-investment-limited.appspot.com",
    messagingSenderId: "1058299498241",
    appId: "1:1058299498241:web:23016d3205c5034fced500"
};

// init firebase
initializeApp(firebaseConfig)

// init firebase Auth
const auth = getAuth()

const database = getDatabase();

const db = getFirestore();

export { auth, db, database }
