import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyArDhd-dwC0_2h1NT6rJkYCwrREB9vk1SM",
  authDomain: "disney-clone-36584.firebaseapp.com",
  projectId: "disney-clone-36584",
  storageBucket: "disney-clone-36584.appspot.com",
  messagingSenderId: "661833347690",
  appId: "1:661833347690:web:993817c539751607979013",
  measurementId: "G-1W3KTT6PB3",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
export { provider };
