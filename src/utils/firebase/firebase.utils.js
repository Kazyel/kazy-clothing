import { initializeApp } from "firebase/app";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBByrttl6vfASTKjnZY1Cfj-yEsu6_i6FQ",

  authDomain: "kazy-clothing.firebaseapp.com",

  projectId: "kazy-clothing",

  storageBucket: "kazy-clothing.appspot.com",

  messagingSenderId: "1085447770456",

  appId: "1:1085447770456:web:94d5ff232a41736241152d",
};

const firebaseApp = initializeApp(firebaseConfig);

// Provider de autenticação com google
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account", //o tipo de seleção
});

// getAuth
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider); //abrindo popup, passando dados de auth e completando com google accounts

// Database
export const db = getFirestore(); 

// criando documentos do usuário
export const createUserDocumentAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid); //referenciando o doc do usuário

  const userSnapshot = await getDoc(userDocRef);

  // if user data does not exists, create doc
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log(error.message);
    }

    return userDocRef;
  }
};
