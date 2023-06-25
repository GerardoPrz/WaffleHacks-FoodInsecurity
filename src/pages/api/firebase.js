import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

import {
    getFirestore,
    doc,
    setDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2ps1m1koNXDLcElKtg0LN-bl3KvWNlLo",
  authDomain: "foodsecurity-d94c7.firebaseapp.com",
  projectId: "foodsecurity-d94c7",
  storageBucket: "foodsecurity-d94c7.appspot.com",
  messagingSenderId: "1054379889926",
  appId: "1:1054379889926:web:e5ed6595711abf061b3a87",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export const login = async (email, password) => {
  try {
    //email and password
    const result = await signInWithEmailAndPassword(auth, email, password);
    console.log(result);
  } catch (error) {
    throw new Error(error);
  }
};

export const register = async (email, password) => {
  try {
    // Registrar usuario con email y contraseña
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
    // Crear un documento para el usuario en Firestore
    const userDocRef = doc(db, "users", userCredential.user.uid);
    const userData = {
      id: userCredential.user.uid,
      menus: [],
      recipes: [],
      favoriteRecipes: [],
      favoriteMenus: [],
      college: "",
      // Otros datos del usuario que quieras guardar en el documento
    };
    await setDoc(userDocRef, userData);
  } catch (error) {
    throw new Error(error);
  }
};

export const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    throw new Error(error);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw new Error(error);
  }
};
