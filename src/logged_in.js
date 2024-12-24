import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, onAuthStateChanged, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

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

/*
const user = auth.currentUser;
console.log("USER:", user);*/

function updateUserProfile(user) {
    const username = user.displayName;
    const useremail = user.email;
    const userpfp = user.photoURL;

    document.getElementById('username').textContent = username;
    document.getElementById('useremail').textContent = useremail;
    document.getElementById('userpfp').src = userpfp;
}

//updateUserProfile(user);

/*

import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});

*/

// Need log out to test
onAuthStateChanged(auth, (user) => {

    console.log(" state changed | user:", user)

    if (user) {
        updateUserProfile(user);
        const uid = user.uid;
        return uid;
    } else {
        alert("Create Account and Log In");

        setTimeout(() => {
            window.location.href = "index.html"
        }, 3000);

    }

});