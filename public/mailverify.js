
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getAuth, sendEmailVerification, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';


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


function sendVerificationEmail() {
    
    onAuthStateChanged(auth, (user) => {
        if (user) {
            
            if (!user.emailVerified) {
                
                sendEmailVerification(user)
                    .then(() => {
                        console.log("Mail gönderildi:", user.email);
                    })
                    .catch((error) => {
                        console.error("Bir hata oluştu. Daha sonra tekrar deneyin. Hata:", error);
                        alert("Bir hata oluştu. Daha sonra tekrar deneyin. Hata:  " + error.message);
                    });
            } else {
                console.log("E-Posta zaten doğrulanmış.");
                window.location.href = "/";
            }
        } else {
            console.log("Kullanıcı yok.");
            window.location.href = "login.html";
        }
    });
}


document.addEventListener('DOMContentLoaded', () => {
    sendVerificationEmail();
});
