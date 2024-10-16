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
            window.location.href = "login.html";
        }

        const email = emailInput.value;
        const password = passwordInput.value
        console.log(email, password);
        grecaptcha.ready(function () {
            grecaptcha.execute('6Lf8NF8qAAAAANp485BwhIOKRnI7vvXwzygqmpRN', { action: 'submit' }).then(function (token) {
                fetch('https://us-central1-ksptr-hypercomms.cloudfunctions.net/verifyCaptchaAndCreateUser', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ token, email, password })
                })
                    .then(response => response.json())
                    .then(response => {
                        if (!response.success == true) {
                            console.error('Error:', response);
                            console.error('Error Message:', response.message);
                            errorMessage.textContent = response.message;
                            errorMessage.style.display = 'block';
                            throw new Error(response.message);
                        }
                        
                    })
                    .then(data => console.log(data))
                    .then(() => {

                        submitButton.disabled = false;
                        const video = document.getElementById("JebofFate");
                        if (video) {
                            video.play();
                        }
                        setTimeout(redirectback, 4500);
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        errorMessage.textContent = error.message;
                        errorMessage.style.display = 'block';
                    });
            });
            });
        });


});