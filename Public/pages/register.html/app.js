// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import {
  getDatabase,
  ref,
  set,
  // onChildAdded,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyBsMGlzmpmK5pwRtFg8iNTkGxzgsAGaJRc",
    authDomain: "slid-b4553.firebaseapp.com",
    projectId: "slid-b4553",
    databaseURL: "https://iffat-s-kitchen-default-rtdb.firebaseio.com/",
    storageBucket: "todoapp-242ed.appspot.com",
    messagingSenderId: "335927048999",
    appId: "1:335927048999:web:62d6c6c03a5224b9ed4702"
  };

// const firebaseConfig = {
//   apiKey: "AIzaSyA1Ut2CA5Yz4cvxcccUD_PfzXZJdkX65dc",
//   authDomain: "slider-b4553.firebaseapp.com",
//   projectId: "slider-b4553",
//   storageBucket: "slider-b4553.appspot.com",
//   messagingSenderId: "981912642582",
//   appId: "1:981912642582:web:802c98ac1814c8ddccc137",
//   measurementId: "G-LQJKQ7DL02",
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();

var inp = document.getElementById("form");
window.saveValue = function () {
  console.log(inp.value);
  //  is say hme ak Specific name maloom hoga
  var obj = {
    task: inp.value,
  };
  console.log(obj);
  obj.id = Math.round().toString().slice(2);

  const taskRef = ref(database, `forms/${obj.id}/`);
  set(taskRef, obj);
};

