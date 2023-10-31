import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { router } from "./components/routes/routing";
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./components/providers/AuthProvider";
import * as firebase from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyCf8DBXFFnQumwHwrNymJ_LBRCHhXgoqYc",
	authDomain: "vk-mini-f790f.firebaseapp.com",
	projectId: "vk-mini-f790f",
	storageBucket: "vk-mini-f790f.appspot.com",
	messagingSenderId: "1046910719297",
	appId: "1:1046910719297:web:7f2e9a4805366f2ea23dc0",
	measurementId: "G-S243D9NYSJ",
};
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

root.render(
	<AuthProvider>
		<RouterProvider router={router} />
	</AuthProvider>
);
