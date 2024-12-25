import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCooOS7GscCmyfDtZ0jumkm6VuuZUO5c0o",
    authDomain: "test-995ab.firebaseapp.com",
    projectId: "test-995ab",
    storageBucket: "test-995ab.firebasestorage.app",
    messagingSenderId: "1089639441652",
    appId: "1:1089639441652:web:03e6e35e0b0bb6b41f2aa1",
    measurementId: "G-RBTB6V8P3L"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

auth.languageCode = 'en'

const provider = new GoogleAuthProvider();

const google_login = document.getElementById('google_login');

google_login.addEventListener('click', () => {

    signInWithPopup(auth, provider).then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;

        console.log("USER:", user);
        window.location.href = "logged_in.html";

    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
});


