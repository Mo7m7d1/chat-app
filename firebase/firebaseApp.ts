import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyAK23Xl9wKd_QWxg-sYRN3e7nKp33r1tUM",
	authDomain: "chat-app-next-almo.firebaseapp.com",
	projectId: "chat-app-next-almo",
	storageBucket: "chat-app-next-almo.appspot.com",
	messagingSenderId: "852045158928",
	appId: "1:852045158928:web:79672df194267a8f904895",
	measurementId: "G-E2K78S0KXQ",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
