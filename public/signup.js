import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';

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

    document.getElementById('signup-form').addEventListener('submit', function (e) {
        e.preventDefault();

        const emailInput = document.getElementById('signup-email');
        const passwordInput = document.getElementById('signup-password');
        const errorMessage = document.getElementById('error-message');
        const submitButton = document.getElementById("submitbtn");


        submitButton.disabled = true;

        if (!emailInput.value.includes('@') || emailInput.value.indexOf('@') === emailInput.value.length - 1) {
            errorMessage.textContent = "Geçerli bir E-Posta formatı kullanın. (ornek@mail.com)";
            errorMessage.style.display = "block";
            emailInput.focus();
            submitButton.disabled = false;
            errorMessage.style.display = 'block';
            return;
        }
        function redirectback() {
            window.location.href = "index.html";
        }
        
        const email = emailInput.value;
        const password = passwordInput.value
        console.log( email, password);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("User signed up:", user);
            })
            .catch((error) => {
                console.error("Error signing up:", error);
                errorMessage.textContent = error.message;
                errorMessage.style.display = 'block';
            })
            .finally(() => {

                submitButton.disabled = false;
                const video = document.getElementById("JebofFate");
                if (video) {
                    video.play();
                }
                setTimeout(redirectback, 4500);
            });
    });
    

});