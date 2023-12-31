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
  addDoc,
  updateDoc,
  arrayUnion,
  getDoc,
  getDocs,
  collection,
} from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
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

export const addUserRecipe = async (recipe) => {
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

    return recipeId
  } catch (error) {
    throw new Error(error)
  }
}

export const addUserMenu = async (menu) => {
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

    return menuId
  } catch (error) {
    throw new Error(error)
  }
}

export const addUserFavoriteRecipe = async (recipeId) => {
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

export const addUserFavoriteMenu = async (menuId) => {
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
    return food.docs
      .map((doc) => doc.data())
      .sort((a, b) => {
        return a.name.localeCompare(b.name)
      })
  } catch (error) {
    throw new Error(error)
  }
}

export const getRecommendations = async () => {
  try {
    const recommendations = await getDocs(collection(db, "recommendations"))
    return recommendations.docs.map((doc) => doc.data())
  } catch (error) {
    throw new Error(error)
  }
}
export const getUserRecipes = async () => {
  try {
    // Obtener el ID del usuario actual
    const userId = auth.currentUser.uid

    // Obtener el documento del usuario actual
    const userDocRef = doc(db, "users", userId)
    const userDoc = await getDoc(userDocRef)

    // Obtener los IDs de las recetas del usuario actual
    const recipeIds = userDoc.data().recipes

    // Obtener las recetas del usuario actual
    const recipes = []
    for (const recipeId of recipeIds) {
      const recipeDocRef = doc(db, "recipes", recipeId)
      const recipeDoc = await getDoc(recipeDocRef)
      recipes.push(recipeDoc.data())
    }
    return recipes
  } catch (error) {
    throw new Error(error)
  }
}

export const getUserMenus = async () => {
  try {
    // Obtener el ID del usuario actual
    const userId = auth.currentUser.uid

    // Obtener el documento del usuario actual
    const userDocRef = doc(db, "users", userId)
    const userDoc = await getDoc(userDocRef)

    // Obtener los IDs de las recetas del usuario actual
    const menuIds = userDoc.data().menus

    // Obtener las recetas del usuario actual
    const menus = []
    for (const menuId of menuIds) {
      const menuDocRef = doc(db, "menus", menuId)
      const menuDoc = await getDoc(menuDocRef)
      menus.push(menuDoc.data())
    }
    return menus
  } catch (error) {
    throw new Error(error)
  }
}

export const getUserFavoriteRecipes = async () => {
  try {
    // Obtener el ID del usuario actual
    const userId = auth.currentUser.uid

    // Obtener el documento del usuario actual
    const userDocRef = doc(db, "users", userId)
    const userDoc = await getDoc(userDocRef)

    // Obtener los IDs de las recetas del usuario actual
    const recipeIds = userDoc.data().favoriteRecipes

    // Obtener las recetas del usuario actual
    const recipes = []
    for (const recipeId of recipeIds) {
      const recipeDocRef = doc(db, "recipes", recipeId)
      const recipeDoc = await getDoc(recipeDocRef)
      recipes.push(recipeDoc.data())
    }
    return recipes
  } catch (error) {
    throw new Error(error)
  }
}

export const getUserFavoriteMenus = async () => {
  try {
    // Obtener el ID del usuario actual
    const userId = auth.currentUser.uid

    // Obtener el documento del usuario actual
    const userDocRef = doc(db, "users", userId)
    const userDoc = await getDoc(userDocRef)

    // Obtener los IDs de las recetas del usuario actual
    const menuIds = userDoc.data().favoriteMenus

    // Obtener las recetas del usuario actual
    const menus = []
    for (const menuId of menuIds) {
      const menuDocRef = doc(db, "menus", menuId)
      const menuDoc = await getDoc(menuDocRef)
      menus.push(menuDoc.data())
    }
    return menus
  } catch (error) {
    throw new Error(error)
  }
}
