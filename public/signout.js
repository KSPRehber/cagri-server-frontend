import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getAuth, signOut } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';

document.addEventListener('DOMContentLoaded', function () {

    const firebaseConfig = {
        apiKey: "AIzaSyCCF61v5knkSncSpsDmkIFSa3rw_neZGhc",
        authDomain: "ksptr-hypercomms.firebaseapp.com",
        projectId: "ksptr-hypercomms",
        storageBucket: "ksptr-hypercomms.appspot.com",
        messagingSenderId: "506253260169",
        appId: "1:506253260169:web:12a59cbffd8ff48087dd58",
        measurementId: "G-N7RNV6ZT46"
    };


    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    async function so() {
        await signOut(auth).then(() => {
            console.log("User signed out successfully.");
            window.location.href = "login.html";
        }).catch((error) => {
            console.error("Error during sign-out:", error);
        });
        await redirect("/login.html");
    }
    so();
});