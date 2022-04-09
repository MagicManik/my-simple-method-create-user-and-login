// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCdYEQnaG2nV9KUUpqa4Oc8tTu7pe-NbmQ",
    authDomain: "user-email-pass-authentication.firebaseapp.com",
    projectId: "user-email-pass-authentication",
    storageBucket: "user-email-pass-authentication.appspot.com",
    messagingSenderId: "1025737146634",
    appId: "1:1025737146634:web:64a4ca7b44c496e1833af3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;