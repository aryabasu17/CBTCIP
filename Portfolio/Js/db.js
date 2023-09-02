// const firebaseConfig = {
//   apiKey: "AIzaSyCwWUmeV07ySdDx6XKADRCDv5GeeSg3IMQ",
//   authDomain: "contactform-17d90.firebaseapp.com",
//   databaseURL: "https://contactform-17d90-default-rtdb.firebaseio.com",
//   projectId: "contactform-17d90",
//   storageBucket: "contactform-17d90.appspot.com",
//   messagingSenderId: "83808895463",
//   appId: "1:83808895463:web:2b4d8f627f1b6a156dfd42",
// };

// //initialize firebase
// firebase.initializeApp(firebaseConfig);

// //reference to database
// var contactFormDB = firebase.database().ref("contactForm");

// document.getElementById("contactForm").addEventListener("click", submitForm);

// function submitForm(e) {
//   e.preventDefault();

//   var name = getElementVal("name");
//   var email = getElementVal("email");
//   var subject = getElementVal("subject");
//   var message = getElementVal("message");

//   console.log(name, email, subject, message);
// }

// const getElementVal = (id) => {
//   return document.getElementById(id).value;
// };
