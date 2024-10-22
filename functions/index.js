/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
const functions = require("firebase-functions");
const axios = require("axios");
const {createUserWithEmailAndPassword} = require("firebase/auth");
const {defineSecret} = require("firebase-functions/params");
const cors = require("cors");
const admin = require("firebase-admin");
// eslint-disable-next-line no-unused-vars
const fs = require("fs").promises;

admin.initializeApp();
const auth = admin.auth();

// Define secret
const csecret = defineSecret("CAPTCHA_SECRET");


async function verifycaptcha(token, functorun) {
  const secretKey = csecret.value();

  try {
    const response = await axios.post(`https://www.google.com/recaptcha/api/siteverify`, null, {
      params: {secret: secretKey, response: token},
    });

    if (response.data.success) {
      if (typeof functorun === "function") {
        functorun();
      }
      return {success: true, message: "CAPTCHA verified successfully"}; // Add success response
    } else {
      return {success: false, message: "CAPTCHA verification failed"};
    }
  } catch (error) {
    console.log(error);
    return {success: false, message: `Error Verifying CAPTCHA: ${error.message}`}; // Clean error message
  }
}


exports.verifyCaptchaAndCreateUser = functions
    .runWith({secrets: ["CAPTCHA_SECRET"]}) // Enable secrets
    .https.onRequest((req, res) => {
      cors({origin: true, allowedHeaders: "Content-Type, Authorization"})(req, res, async () => {
        const {token, email, password} = req.body;

        try {
        // Call the verifycaptcha function and pass createUser as the function to run
          const captchaResult = await verifycaptcha(token, async () => {
          // This function will run if the captcha is successful
            try {
              const userCredential = await createUserWithEmailAndPassword(auth, email, password);
              const user = userCredential.user;
              res.json({success: true, message: "User created successfully!", user});
            } catch (error) {
              console.error("Error signing up:", error);
              res.status(500).json({success: false, message: error.code});
            }
          });

          // If CAPTCHA verification failed, return the error message
          if (!captchaResult.success) {
            res.status(400).json(captchaResult);
          }
        } catch (error) {
          res.status(500).json({success: false, message: `Error Creating Account: ${error.message}`});
        }
      });
    });

const db = admin.firestore();

// Example chat ID
let chatID = "null";

// Reference to Firestore collection
let messagesRef = db.collection("chats").doc(chatID).collection("messages");

// Example function to send a message
function sendMessage(usermail, messageContent, reply, cid) {
  chatID = cid;
  messagesRef = db.collection("chats").doc(chatID).collection("messages");
  messagesRef.orderBy("messageNumber", "desc").limit(1).get()
      .then((snapshot) => {
        let lastMessageNumber = 0; // Default if no messages exist yet
        if (!snapshot.empty) {
          lastMessageNumber = snapshot.docs[0].data().messageNumber;
        }
        const newMessageNumber = lastMessageNumber + 1;

        // Add the new message to Firestore
        messagesRef.add({
          messageNumber: newMessageNumber,
          user: usermail,
          message: messageContent,
          reply: reply,
          timestamp: admin.firestore.FieldValue.serverTimestamp(), // Use admin.firestore here
        });
      });
}
// sendMessage("duskudarstemahmet@gmail.com", "messagetest", "null", "general");

exports.messageadd = functions
    .runWith({secrets: ["CAPTCHA_SECRET"]}) // Enable secrets
    .https.onRequest((req, res) => {
      cors({origin: true, allowedHeaders: "Content-Type, Authorization"})(req, res, async () => {
        const {ctoken, idToken, message, reply, chatid} = req.body;

        try {
        // Call the verifycaptcha function and pass createUser as the function to run
          const captchaResult = await verifycaptcha(ctoken, async () => {
          // This function will run if the captcha is successful
            try {
              admin.auth().verifyIdToken(idToken)
                  .then((decodedToken) => {
                    const email = decodedToken.email;
                    sendMessage(email, message, reply, chatid);
                  })
                  .catch((error) => {
                    res.status(401).send("Error getting UID", error);
                  });
            } catch (error) {
              console.error("Error sending message:", error);
              res.status(500).json({success: false, message: error.code});
            }
          });

          // If CAPTCHA verification failed, return the error message
          if (!captchaResult.success) {
            res.status(400).json(captchaResult);
          }
        } catch (error) {
          res.status(500).json({success: false, message: `Error Creating Account: ${error.message}`});
        }
      });
    });

exports.pfpupload = functions
    .runWith({secrets: ["CAPTCHA_SECRET"]}) // Enable secrets
    .https.onRequest((req, res) => {
      cors({origin: true, allowedHeaders: "Content-Type, Authorization"})(req, res, async () => {
        const {ctoken, idToken, img} = req.body;

        try {
        // Call the verifycaptcha function and pass createUser as the function to run
          const captchaResult = await verifycaptcha(ctoken, async () => {
            console.log("cs");
            try {
              admin.auth().verifyIdToken(idToken)
                  .then((decodedToken) => {
                    console.log(uploadToImgur(img));
                  })
                  .catch((error) => {
                    res.status(401).send("Error getting UID", error);
                  });
            } catch (error) {
              console.error("Error sending message:", error);
              res.status(500).json({success: false, message: error.code});
            }
          });

          // If CAPTCHA verification failed, return the error message
          if (!captchaResult.success) {
            res.status(400).json(captchaResult);
            console.log("shit...");
          }
        } catch (error) {
          res.status(500).json({success: false, message: `Error updating profile picture: ${error.message}`});
        }
      });
    });


async function uploadToImgur(imageUrl) {
  try {
    // Download the image from the URL
    const imageResponse = await axios.get(imageUrl, {
      responseType: "arraybuffer",
    });

    // Convert the image to base64
    const base64Image = Buffer.from(imageResponse.data, "binary").toString("base64");

    // Upload the base64-encoded image to Imgur
    const response = await axios.post("https://api.imgur.com/3/image", {
      image: base64Image,
      type: "base64",
    }, {
      headers: {
        Authorization: `Client-ID ${"798bac4d1eca70e"}`,
      },
    });

    // Return the public URL of the uploaded image
    return response.data.data.link;
  } catch (error) {
    console.error("Error uploading to Imgur:", error.response ? error.response.data : error);
    throw error;
  }
}

exports.retmessages = functions
    .runWith({secrets: ["CAPTCHA_SECRET"]}) // Enable secrets
    .https.onRequest((req, res) => {
      cors({origin: true, allowedHeaders: "Content-Type, Authorization"})(req, res, async () => {
        const {ctoken, idToken, chatid} = req.body;
        try {
        // Call the verifycaptcha function and pass createUser as the function to run
          const captchaResult = await verifycaptcha(ctoken, async () => {
          // This function will run if the captcha is successful
            try {
              admin.auth().verifyIdToken(idToken)
                  .then((decodedToken) => {
                    const email = decodedToken.email;
                    console.log(email, chatid);
                  })
                  .catch((error) => {
                    res.status(401).send("Error getting UID", error);
                  });
            } catch (error) {
              console.error("Error sending message:", error);
              res.status(500).json({success: false, message: error.code});
            }
          });

          // If CAPTCHA verification failed, return the error message
          if (!captchaResult.success) {
            res.status(400).json(captchaResult);
          }
        } catch (error) {
          res.status(500).json({success: false, message: `Error Creating Account: ${error.message}`});
        }
      });
    });
