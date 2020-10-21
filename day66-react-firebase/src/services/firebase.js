import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyBd26B4hZ0pSsqh7crzBbSURixpI3ra-nI",
  authDomain: "react-chat-4pp.firebaseapp.com",
  databaseURL: "https://react-chat-4pp.firebaseio.com",
  projectId: "react-chat-4pp",
  storageBucket: "react-chat-4pp.appspot.com",
  messagingSenderId: "1047482405442",
  appId: "1:1047482405442:web:40bf36b251335e15d153db",
  measurementId: "G-YXNTC2GJE5",
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
