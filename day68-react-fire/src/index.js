import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { FirebaseAppProvider } from "reactfire";
import { BrowserRouter } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyBd26B4hZ0pSsqh7crzBbSURixpI3ra-nI",
  authDomain: "react-chat-4pp.firebaseapp.com",
  databaseURL: "https://react-chat-4pp.firebaseio.com",
  projectId: "react-chat-4pp",
  storageBucket: "react-chat-4pp.appspot.com",
  messagingSenderId: "1047482405442",
  appId: "1:1047482405442:web:053f896bf2f9fa47d153db",
  measurementId: "G-0EE89ZXYRT",
};

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
