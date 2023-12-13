// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCQmC14-a5RdQDzW_8uaAwDNd47LbDJ8tc",
  authDomain: "crown-clothing-224fb.firebaseapp.com",
  projectId: "crown-clothing-224fb",
  storageBucket: "crown-clothing-224fb.appspot.com",
  messagingSenderId: "196567932841",
  appId: "1:196567932841:web:58bf2ac81c459b6e4b6eb8",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
