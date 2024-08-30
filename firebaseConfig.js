// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtEMVpajciJGFzAnav2YbmSQCgnvTKhh8",
  authDomain: "movies-match-2998b.firebaseapp.com",
  projectId: "movies-match-2998b",
  storageBucket: "movies-match-2998b.appspot.com",
  messagingSenderId: "393589199528",
  appId: "1:393589199528:web:140bd6dcec21aaba48689d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { app, auth }
