
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';


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

function redirectback() {
    window.location.href = "/";
}

function ver() {

    let status = 0;

    onAuthStateChanged(auth, (user) => {
        if (user) {
            const panel = document.getElementById("signuppanel")
            const video = document.getElementById("JebofFate");
            if (status == 0) {
                panel.style.display = "none";
            }
            if (video) {
                video.play();
            }
            console.log(status);
            setTimeout(redirectback, 4500);
        } else {
            status = 1;
            console.log("Kullanıcı yok.", status);

        }
    });
}


document.addEventListener('DOMContentLoaded', () => {
    ver();
});
