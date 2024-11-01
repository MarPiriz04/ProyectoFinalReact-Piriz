import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA3Yma8IAYSkJXL1IDYSGXKB7QmNtahUEo",
    authDomain: "proyectoreact-piriz.firebaseapp.com",
    projectId: "proyectoreact-piriz",
    storageBucket: "proyectoreact-piriz.firebasestorage.app",
    messagingSenderId: "126755829348",
    appId: "1:126755829348:web:c4dd44593e582a8a2f1171"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);