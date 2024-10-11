import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';

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


    onAuthStateChanged(auth, (user) => {
        if (user) {
            if (!user.emailVerified) {
                console.log('Email not verified. Redirecting to verification page.');
                window.location.href = "verifyemail.html";
            } else {
                console.log('Kullanıcı emaili doğrulanmış.');
            }
        } else {
            console.log('Giriş Yapılmamış. Giriş sayfasına yönlendiriliyor.');
            window.location.href = "signup-login-decide.html";
        }
    });
});
