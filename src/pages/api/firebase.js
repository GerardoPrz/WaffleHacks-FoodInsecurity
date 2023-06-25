import { initializeApp } from "firebase/app"
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth"

import {
  getFirestore,
  doc,
  setDoc,
  getDocs,
  collection,
} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC2ps1m1koNXDLcElKtg0LN-bl3KvWNlLo",
  authDomain: "foodsecurity-d94c7.firebaseapp.com",
  projectId: "foodsecurity-d94c7",
  storageBucket: "foodsecurity-d94c7.appspot.com",
  messagingSenderId: "1054379889926",
  appId: "1:1054379889926:web:e5ed6595711abf061b3a87",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

const db = getFirestore(app)

export const login = async (email, password) => {
  try {
    //email and password
    const result = await signInWithEmailAndPassword(auth, email, password)
  } catch (error) {
    throw new Error(error)
  }
}

export const register = async (email, password) => {
  try {
    // Registrar usuario con email y contraseña
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    )

    // Crear un documento para el usuario en Firestore
    const userDocRef = doc(db, "users", userCredential.user.uid)
    const userData = {
      id: userCredential.user.uid,
      menus: [],
      recipes: [],
      favoriteRecipes: [],
      favoriteMenus: [],
      college: "",
      // Otros datos del usuario que quieras guardar en el documento
    }
    await setDoc(userDocRef, userData)
  } catch (error) {
    throw new Error(error)
  }
}

export const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email)
  } catch (error) {
    throw new Error(error)
  }
}

export const logout = async () => {
  try {
    await signOut(auth)
  } catch (error) {
    throw new Error(error)
  }
}

export const addRecipes = async (recipe) => {
  try {
    // Crear la receta en la colección "recipes"
    const recipeRef = await addDoc(collection(db, "recipes"), recipe)
    const recipeId = recipeRef.id

    // Obtener el ID del usuario actual
    const userId = auth.currentUser.uid

    // Actualizar el array de recetas del usuario con el nuevo ID de la receta
    const userDocRef = doc(db, "users", userId)
    await updateDoc(userDocRef, {
      recipes: arrayUnion(recipeId),
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const addMenu = async (menu) => {
  try {
    // Crear el menú en la colección "menus"
    const menuRef = await addDoc(collection(db, "menus"), menu)
    const menuId = menuRef.id

    // Obtener el ID del usuario actual
    const userId = auth.currentUser.uid

    // Actualizar el array de menús del usuario con el nuevo ID del menú
    const userDocRef = doc(db, "users", userId)
    await updateDoc(userDocRef, {
      menus: arrayUnion(menuId),
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const addFavoriteRecipe = async (recipeId) => {
  try {
    // Obtener el ID del usuario actual
    const userId = auth.currentUser.uid

    // Actualizar el array de recetas favoritas del usuario con el nuevo ID de la receta
    const userDocRef = doc(db, "users", userId)
    await updateDoc(userDocRef, {
      favoriteRecipes: arrayUnion(recipeId),
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const addFavoriteMenu = async (menuId) => {
  try {
    // Obtener el ID del usuario actual
    const userId = auth.currentUser.uid

    // Actualizar el array de recetas favoritas del usuario con el nuevo ID de la receta
    const userDocRef = doc(db, "users", userId)
    await updateDoc(userDocRef, {
      favoriteMenus: arrayUnion(menuId),
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const getFood = async () => {
  try {
    const food = await getDocs(collection(db, "food"))
    return food.docs.map((doc) => doc.data())
  } catch (error) {
    throw new Error(error)
  }
}
