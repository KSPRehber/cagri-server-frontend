import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const idNameArray = [
  { id: "ksptrccann", name: "KSPTIM Güncellemeleri" },
  { id: "newvids", name: "UZAYA ÇAĞRI Videoları" },
  { id: "kspnews", name: "KSP Haberleri" },
  { id: "rules", name: "Kurallar" },
  { id: "general", name: "Genel" },
  { id: "space", name: "Uzay" },
  { id: "gal-q", name: "GAL-Sorular" },
  { id: "gal-discussion", name: "GAL-Tartışma" },
  { id: "memes", name: "Karikatürler" },
  { id: "meteorology", name: "Meteoroloji" },
  { id: "art", name: "Sanat" },
  { id: "kspmodding", name: "KSP Modlama" },
  { id: "gamess", name: "Oyun Görüntüleri" },
  { id: "film-book-rec", name: "Film/Kitap Öneri" },
  { id: "offtopic", name: "Konu-Dışı" },
];
let messagejson = {
  general: [
    {
      message: "Genel kanalına mesaj yazdım.",
      messageNumber: "1",
      reply: "null",
      timestamp: "October 19, 2024 at 9:29:15 PM UTC+3",
      user: "duskudarstemahmet@gmail.com",
    },
    {
      message: "Mesajlar birbirinin ardınca sıralanıyorlar.",
      messageNumber: "2",
      reply: "null",
      timestamp: "October 19, 2024 at 9:29:15 PM UTC+3",
      user: "duskudarstemahmet@gmail.com",
    },
    {
      message: "Ayrıca Ekran kaydırılarak mesaj geçmişine de bakabiliyoruz.",
      messageNumber: "3",
      reply: "null",
      timestamp: "October 19, 2024 at 9:29:15 PM UTC+3",
      user: "duskudarstemahmet@gmail.com",
    },
    {
      message: "Lorem testi: Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illo optio adipisci impedit neque expedita dignissimos esse ea nemo alias, iure praesentium sit, consequuntur quaerat totam inventore! Voluptas hic accusantium similique? Explicabo, possimus aspernatur natus laborum adipisci mollitia eius maiores quibusdam soluta debitis dicta quam aliquid consectetur tenetur minus tempora.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illo optio adipisci impedit neque expedita dignissimos esse ea nemo alias, iure praesentium sit, consequuntur quaerat totam inventore! Voluptas hic accusantium similique? Explicabo, possimus aspernatur natus laborum adipisci mollitia eius maiores quibusdam soluta debitis dicta quam aliquid consectetur tenetur minus tempora.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illo optio adipisci impedit neque expedita dignissimos esse ea nemo alias, iure praesentium sit, consequuntur quaerat totam inventore! Voluptas hic accusantium similique? Explicabo, possimus aspernatur natus laborum adipisci mollitia eius maiores quibusdam soluta debitis dicta quam aliquid consectetur tenetur minus tempora.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illo optio adipisci impedit neque expedita dignissimos esse ea nemo alias, iure praesentium sit, consequuntur quaerat totam inventore! Voluptas hic accusantium similique? Explicabo, possimus aspernatur natus laborum adipisci mollitia eius maiores quibusdam soluta debitis dicta quam aliquid consectetur tenetur minus tempora.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illo optio adipisci impedit neque expedita dignissimos esse ea nemo alias, iure praesentium sit, consequuntur quaerat totam inventore! Voluptas hic accusantium similique? Explicabo, possimus aspernatur natus laborum adipisci mollitia eius maiores quibusdam soluta debitis dicta quam aliquid consectetur tenetur minus tempora.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illo optio adipisci impedit neque expedita dignissimos esse ea nemo alias, iure praesentium sit, consequuntur quaerat totam inventore! Voluptas hic accusantium similique? Explicabo, possimus aspernatur natus laborum adipisci mollitia eius maiores quibusdam soluta debitis dicta quam aliquid consectetur tenetur minus tempora.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illo optio adipisci impedit neque expedita dignissimos esse ea nemo alias, iure praesentium sit, consequuntur quaerat totam inventore! Voluptas hic accusantium similique? Explicabo, possimus aspernatur natus laborum adipisci mollitia eius maiores quibusdam soluta debitis dicta quam aliquid consectetur tenetur minus tempora.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illo optio adipisci impedit neque expedita dignissimos esse ea nemo alias, iure praesentium sit, consequuntur quaerat totam inventore! Voluptas hic accusantium similique? Explicabo, possimus aspernatur natus laborum adipisci mollitia eius maiores quibusdam soluta debitis dicta quam aliquid consectetur tenetur minus tempora.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illo optio adipisci impedit neque expedita dignissimos esse ea nemo alias, iure praesentium sit, consequuntur quaerat totam inventore! Voluptas hic accusantium similique? Explicabo, possimus aspernatur natus laborum adipisci mollitia eius maiores quibusdam soluta debitis dicta quam aliquid consectetur tenetur minus tempora.",
      messageNumber: "3",
      reply: "null",
      timestamp: "October 19, 2024 at 9:29:15 PM UTC+3",
      user: "duskudarstemahmet@gmail.com",
    },
    {
      message: "Lorem testi: Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illo optio adipisci impedit neque expedita dignissimos esse ea nemo alias, iure praesentium sit, consequuntur quaerat totam inventore! Voluptas hic accusantium similique? Explicabo, possimus aspernatur natus laborum adipisci mollitia eius maiores quibusdam soluta debitis dicta quam aliquid consectetur tenetur minus tempora.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illo optio adipisci impedit neque expedita dignissimos esse ea nemo alias, iure praesentium sit, consequuntur quaerat totam inventore! Voluptas hic accusantium similique? Explicabo, possimus aspernatur natus laborum adipisci mollitia eius maiores quibusdam soluta debitis dicta quam aliquid consectetur tenetur minus tempora.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illo optio adipisci impedit neque expedita dignissimos esse ea nemo alias, iure praesentium sit, consequuntur quaerat totam inventore! Voluptas hic accusantium similique? Explicabo, possimus aspernatur natus laborum adipisci mollitia eius maiores quibusdam soluta debitis dicta quam aliquid consectetur tenetur minus tempora.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illo optio adipisci impedit neque expedita dignissimos esse ea nemo alias, iure praesentium sit, consequuntur quaerat totam inventore! Voluptas hic accusantium similique? Explicabo, possimus aspernatur natus laborum adipisci mollitia eius maiores quibusdam soluta debitis dicta quam aliquid consectetur tenetur minus tempora.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illo optio adipisci impedit neque expedita dignissimos esse ea nemo alias, iure praesentium sit, consequuntur quaerat totam inventore! Voluptas hic accusantium similique? Explicabo, possimus aspernatur natus laborum adipisci mollitia eius maiores quibusdam soluta debitis dicta quam aliquid consectetur tenetur minus tempora.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illo optio adipisci impedit neque expedita dignissimos esse ea nemo alias, iure praesentium sit, consequuntur quaerat totam inventore! Voluptas hic accusantium similique? Explicabo, possimus aspernatur natus laborum adipisci mollitia eius maiores quibusdam soluta debitis dicta quam aliquid consectetur tenetur minus tempora.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illo optio adipisci impedit neque expedita dignissimos esse ea nemo alias, iure praesentium sit, consequuntur quaerat totam inventore! Voluptas hic accusantium similique? Explicabo, possimus aspernatur natus laborum adipisci mollitia eius maiores quibusdam soluta debitis dicta quam aliquid consectetur tenetur minus tempora.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illo optio adipisci impedit neque expedita dignissimos esse ea nemo alias, iure praesentium sit, consequuntur quaerat totam inventore! Voluptas hic accusantium similique? Explicabo, possimus aspernatur natus laborum adipisci mollitia eius maiores quibusdam soluta debitis dicta quam aliquid consectetur tenetur minus tempora.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illo optio adipisci impedit neque expedita dignissimos esse ea nemo alias, iure praesentium sit, consequuntur quaerat totam inventore! Voluptas hic accusantium similique? Explicabo, possimus aspernatur natus laborum adipisci mollitia eius maiores quibusdam soluta debitis dicta quam aliquid consectetur tenetur minus tempora.",
      messageNumber: "3",
      reply: "null",
      timestamp: "October 19, 2024 at 9:29:15 PM UTC+3",
      user: "duskudarstemahmet@gmail.com",
    }
  ],
  art: [
    {
      message: "Comm check",
      messageNumber: "1",
      reply: "null",
      timestamp: "October 19, 2024 at 9:29:15 PM UTC+3",
      user: "duskudarstemahmet@gmail.com",
    },
    {
      message: "Loud and clear!",
      messageNumber: "2",
      reply: "null",
      timestamp: "October 19, 2024 at 9:29:15 PM UTC+3",
      user: "duskudarstemahmet@gmail.com",
    },
    {
      message: "Test complete.",
      messageNumber: "3",
      reply: "null",
      timestamp: "October 19, 2024 at 9:29:15 PM UTC+3",
      user: "duskudarstemahmet@gmail.com",
    },
  ]
};

const parentElement = document.getElementById("messagelist");

// Create a new div element for the message

document.addEventListener("DOMContentLoaded", function () {
  if (!localStorage.getItem("currentchannel")) {
    localStorage.setItem("currentchannel", "general");
  }

  const firebaseConfig = {
    apiKey: "AIzaSyCCF61v5knkSncSpsDmkIFSa3rw_neZGhc",
    authDomain: "ksptr-hypercomms.firebaseapp.com",
    projectId: "ksptr-hypercomms",
    storageBucket: "ksptr-hypercomms.appspot.com",
    messagingSenderId: "506253260169",
    appId: "1:506253260169:web:12a59cbffd8ff48087dd58",
    measurementId: "G-N7RNV6ZT46",
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  let ctoken;
  function getcaptchatoken() {
    grecaptcha.ready(function () {
      grecaptcha
        .execute("6Lf8NF8qAAAAANp485BwhIOKRnI7vvXwzygqmpRN", {
          action: "submit",
        })
        .then(function (token) {
          ctoken = token;
        });
    });
  }
  const parentDivA = document.getElementById("text-channels");
  const parentDivB = document.getElementById("announcements");
  const ctind = document.getElementById("cti");
  const cc = localStorage.getItem("currentchannel");
  const childDiv = document.getElementById(cc);
  const cn = document.getElementById("channelname");
  const cta = childDiv.closest("#text-channels");
  console.log(cc);
  cn.textContent = getNameById(cc);

  if (cta) {
    ctind.src = "hashtag.svg";
  } else {
    if (cc == "rules") {
      ctind.src = "rulebook.svg";
    } else {
      ctind.src = "megaphone.svg";
    }
  }
  function channelupd() {
    for (let i = 0; i < messageCount; i++) {
      messageType = localStorage.getItem("currentchannel");;
      console.log(messageType);
      const mes = parsedmessages[messageType][i].message;
      const usr = parsedmessages[messageType][i].user;

      const newMessageDiv = document.createElement("div");
      newMessageDiv.classList.add("message");

      // Add the inner HTML of the message
      newMessageDiv.innerHTML = `
    <div class="messinf reg-flex unselectable">
        <img class="mespp" src="ppblank.svg" alt="User profile picture">
        <p class="league-spartan-400 usernamemes">${usr}</p>
    </div>
    <div class="mescontent">
        <p class="open-sans-400">${mes}</p>
    </div>`;

      // Append the new div to the parent element
      parentElement.appendChild(newMessageDiv);
    }
  }

  // Add an event listener to the parent div
  parentDivA.addEventListener("click", function (event) {
    // Check if the clicked element is a button or inside a button
    const button = event.target.closest("button");

    if (button) {
      // Get the first child div inside the button
      const firstChildDiv = button.querySelector("div");

      // Execute your function (e.g., log the ID of the first child div)
      if (firstChildDiv) {
        localStorage.setItem("currentchannel", firstChildDiv.id);
        ctind.src = "hashtag.svg";
        console.log(firstChildDiv.id);
        cn.textContent = getNameById(localStorage.getItem("currentchannel"));
        if (firstChildDiv.id == "rules") {
          ctind.src = "rulebook.svg";
        }
      }
      const messages = document.querySelectorAll('.message');

      // Loop through each element and remove it
      messages.forEach(message => {
        message.remove();
      });
      channelupd();
    }
  });
  parentDivB.addEventListener("click", function (event) {
    // Check if the clicked element is a button or inside a button
    const button = event.target.closest("button");

    if (button) {
      // Get the first child div inside the button
      const firstChildDiv = button.querySelector("div");

      // Execute your function (e.g., log the ID of the first child div)
      if (firstChildDiv) {
        localStorage.setItem("currentchannel", firstChildDiv.id);
        ctind.src = "megaphone.svg";
        cn.textContent = getNameById(localStorage.getItem("currentchannel"));
        console.log(firstChildDiv.id);
        if (firstChildDiv.id == "rules") {
          ctind.src = "rulebook.svg";
        }
      }
      channelupd();
      const messages = document.querySelectorAll('.message');

      // Loop through each element and remove it
      messages.forEach(message => {
        message.remove();
      });
    }
  });
  const textarea = document.getElementById("upwardGrowTextarea");
  const container = document.querySelector(".textarea-container");
  const messager = document.getElementById("messager");

  const parsedmessages = JSON.parse(JSON.stringify(messagejson));
  const messageCount = messagejson.general.length;
  console.log(messageCount);
  let messageType;


  // parsedmessages.employees[0].firstName

  function getNameById(id) {
    const result = idNameArray.find((item) => item.id === id);
    return result ? result.name : "ID not found";
  }

  textarea.addEventListener("input", function () {
    // Reset height to auto to calculate the correct scroll height
    this.style.height = "auto";

    // Get the new scroll height
    const newHeight = this.scrollHeight;
    const lineHeight = parseInt(window.getComputedStyle(this).lineHeight, 10);
    const numberOfRows = Math.floor(newHeight / lineHeight);

    // Adjust the height based on content
    this.style.height = newHeight + "px";

    // Switch between flex and absolute based on number of rows
    if (numberOfRows > 1) {
      // If more than one row, use absolute positioning and move it upwards
      this.style.position = "absolute";
      this.style.bottom = "0";
      this.style.top = "auto";

      // Move the textarea upwards by adjusting its height relative to the container
      container.style.height = newHeight + "px";
      container.style.position = "relative";
    } else {
      // If one row, revert to flex positioning
      this.style.position = "relative";
      this.style.height = "40px"; // Back to the single-row height
      container.style.height = "40px"; // Reset container height to single row
    }

    // Make sure the textarea doesn't grow downward, and container adjusts accordingly
    messager.style.alignItems = "flex-end"; // Ensures the send button stays aligned
    console.log("hi");
  });
  textarea.focus();
  textarea.blur();
  const picker = document.getElementById("picker");
  picker.addEventListener("emoji-click", (event) => {
    console.log(event.detail); // will log something like the above
    textarea.value += event.detail.unicode;
    textarea.focus();
  });
  const emojiArray = [
    "😀",
    "😂",
    "😎",
    "😇",
    "😍",
    "🤔",
    "🤯",
    "🤖",
    "👻",
    "👽",
    "💀",
    "🤡",
    "🥸",
    "👍",
  ];
  const randomEmojiP = document.getElementById("emojitoggle");
  // Function to get a random emoji from the array
  function getRandomEmoji() {
    const randomIndex = Math.floor(Math.random() * emojiArray.length); // Get a random index
    return emojiArray[randomIndex]; // Return the random emoji
  }
  randomEmojiP.textContent = "😎";
  randomEmojiP.addEventListener("mouseover", function () {
    updateRandomEmoji();
  });
  // Function to update the <p> content to a random emoji
  function updateRandomEmoji() {
    const randomEmoji = getRandomEmoji(); // Get a random emoji
    randomEmojiP.textContent = randomEmoji; // Set the random emoji as the content of the <p> element
  }

  // Start changing the emoji every 1000ms (1 second)
  let emojitoggled = false;
  picker.style.display = "none";
  randomEmojiP.addEventListener("click", function () {
    if (emojitoggled == true) {
      picker.style.display = "none";
    } else {
      picker.style.display = "block";
    }
    emojitoggled = !emojitoggled;
  });
});
