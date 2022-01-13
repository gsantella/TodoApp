import Alpine from 'alpinejs'
import './style.css'

window.Alpine = Alpine
Alpine.start()


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env['firebase_api_key'],
  authDomain: "todoapp-d07ae.firebaseapp.com",
  projectId: "todoapp-d07ae",
  storageBucket: "todoapp-d07ae.appspot.com",
  messagingSenderId: "686565277926",
  appId: "1:686565277926:web:58ae94f559bfa3e613bb27",
  measurementId: "G-R9GGVPM2W6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);







if (navigator.onLine) {
  document.querySelector('#netWarning').style.display = 'none'
} else {
  document.querySelector('#netWarning').style.display = ''
}

window.addEventListener('offline', function(e) { 
  document.querySelector('#netWarning').style.display = ''
  console.log('offline'); 
});

window.addEventListener('online', function(e) { 
  document.querySelector('#netWarning').style.display = 'none'
  console.log('online'); 
});
