import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyC2ps1m1koNXDLcElKtg0LN-bl3KvWNlLo",
    authDomain: "foodsecurity-d94c7.firebaseapp.com",
    projectId: "foodsecurity-d94c7",
    storageBucket: "foodsecurity-d94c7.appspot.com",
    messagingSenderId: "1054379889926",
    appId: "1:1054379889926:web:e5ed6595711abf061b3a87"
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);

export const login = async () => {

    try {//email and password
        await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
        throw new Error(error);
    }
  };

export const register = async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      throw new Error(error);
    }
  };

export const logout = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
        throw new Error(error);
    }
};