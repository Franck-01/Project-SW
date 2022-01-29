import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyB5rgQ1zphHAvGK6MYdHgvPdmvc4XbXKDc",
    authDomain: "proyect-sw.firebaseapp.com",
    projectId: "proyect-sw",
    storageBucket: "proyect-sw.appspot.com",
    messagingSenderId: "77894030881",
    appId: "1:77894030881:web:624d43392b616697c6b560",
    measurementId: "G-HVKC2R5PBZ"
};

const app = initializeApp(firebaseConfig);
export const store = getFirestore(app)