import { createContext, useContext, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    throw new Error("There is not auth provider");
  }
  return context;
};

export function AuthProvider({ children }) {
  // crea un registro de usuario
  const signup = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  // pregunta si existe login de usuario activo
  const login = async (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
    });
  }, []);

  return (
    <authContext.Provider value={{ signup, login }}>
      {children}
    </authContext.Provider>
  );
}
