/* eslint-disable max-len */
const functions = require("firebase-functions");
const axios = require("axios");
// eslint-disable-next-line no-unused-vars
const {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} = require("firebase/auth");
const {initializeApp} = require("firebase/app");
const {defineSecret} = require("firebase-functions/params");
const cors = require("cors");

const firebaseConfig = {
  apiKey: "AIzaSyCCF61v5knkSncSpsDmkIFSa3rw_neZGhc",
  authDomain: "ksptr-hypercomms.firebaseapp.com",
  projectId: "ksptr-hypercomms",
  storageBucket: "ksptr-hypercomms.appspot.com",
  messagingSenderId: "506253260169",
  appId: "1:506253260169:web:12a59cbffd8ff48087dd58",
  measurementId: "G-N7RNV6ZT46",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

// Define secret
const csecret = defineSecret("CAPTCHA_SECRET");

exports.verifyCaptchaAndCreateUser = functions
    .runWith({secrets: ["CAPTCHA_SECRET"]}) // Enable secrets
    .https.onRequest((req, res) => {
      cors({origin: true, allowedHeaders: "Content-Type, Authorization"})(req, res, async () => {
        const {token, email, password} = req.body;
        const secretKey = csecret.value();

        try {
          const response = await axios.post(`https://www.google.com/recaptcha/api/siteverify`, null, {
            params: {secret: secretKey, response: token},
          });

          if (response.data.success) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  const user = userCredential.user;
                  res.json({success: true, message: "User created successfully!", user});
                })
                .catch((error) => {
                  console.error("Error signing up:", error);
                  res.status(500).json({success: false, message: error.code});
                });
          } else {
            res.status(400).json({success: false, message: "CAPTCHA verification failed"});
          }
        } catch (error) {
          res.status(500).json({success: false, message: `Error Creating Account: ${error}`});
        }
      });
    });
