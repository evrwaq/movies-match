import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCtEMVpajciJGFzAnav2YbmSQCgnvTKhh8",
  authDomain: "movies-match-2998b.firebaseapp.com",
  projectId: "movies-match-2998b",
  storageBucket: "movies-match-2998b.appspot.com",
  messagingSenderId: "393589199528",
  appId: "1:393589199528:web:140bd6dcec21aaba48689d"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app);

export { app, db }
