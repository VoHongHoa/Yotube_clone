import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDP9OAugR62YOm48uOl5Ib_sdW_ge7zhGU",
  authDomain: "video-616d5.firebaseapp.com",
  projectId: "video-616d5",
  storageBucket: "video-616d5.appspot.com",
  messagingSenderId: "481382816955",
  appId: "1:481382816955:web:f62dccd0266f1aabee9d9e",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export default app;
