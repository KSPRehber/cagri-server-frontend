import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";

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
auth.useDeviceLanguage();
const provider = new GoogleAuthProvider();

function redirectback(){
    window.location.href = "/";
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('signingoogle').addEventListener('click', function (event) {
        signInWithPopup(auth, provider)
            .then(() => {
                var video = document.getElementById("JebofFate");
                video.play();
                setTimeout(redirectback, 4500);
            }).catch((error) => {
                console.error(error);
            });
    });

});
