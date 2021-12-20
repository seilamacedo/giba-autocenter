        
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";

        
   const firebaseConfig = {
    apiKey: "AIzaSyD05NgH0J33jo63MDYj-lplBCZQXRI7jPk",
    authDomain: "giba-dados.firebaseapp.com",
    databaseURL: "https://giba-dados-default-rtdb.firebaseio.com",
    projectId: "giba-dados",
    storageBucket: "giba-dados.appspot.com",
    messagingSenderId: "699278973633",
    appId: "1:699278973633:web:f968ff28027cf0c89ed240",
    measurementId: "G-FRHB4WPFNB"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
