import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider ,signInWithPopup} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCpUFKrhjbDRg_JuU51tARvsUgCSz-EzQI",
  authDomain: "serveconnect-376b0.firebaseapp.com",
  projectId: "serveconnect-376b0",
  storageBucket: "serveconnect-376b0.firebasestorage.com",
  messagingSenderId: "410603792027",
  appId: "1:410603792027:web:29e3d20d0893b4b3a4083e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider , signInWithPopup };
