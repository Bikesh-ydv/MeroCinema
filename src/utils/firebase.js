
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBkygYmQHf58tzwrs_FHkL0ISljcfxwba8",
  authDomain: "netflixplus-2cf35.firebaseapp.com",
  projectId: "netflixplus-2cf35",
  storageBucket: "netflixplus-2cf35.appspot.com",
  messagingSenderId: "120825434000",
  appId: "1:120825434000:web:7228d7704ee7a2e3bb2d15"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();