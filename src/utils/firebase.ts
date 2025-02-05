// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAjObGKdF9ynoEWVJpOYXk6LLfZagiQe3E",
    authDomain: "creative-city-f119c.firebaseapp.com",
    projectId: "creative-city-f119c",
    storageBucket: "creative-city-f119c.appspot.com",
    messagingSenderId: "803507280562",
    appId: "1:803507280562:web:7a78015644ba787c3447ab"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);3123035510
3207265529