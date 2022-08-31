import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAFzaDHDR0zkR5Oy7K6p-94LBOuCUBBvDo",
    authDomain: "filolearning-shop.firebaseapp.com",
    projectId: "filolearning-shop",
    storageBucket: "filolearning-shop.appspot.com",
    messagingSenderId: "1013863428137",
    appId: "1:1013863428137:web:798ae54bd90a029a772c38"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)