import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
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
  const [user, setUser] = useState(null);

  // crea un registro de usuario
  const signup = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  // pregunta si existe login de usuario activo
  const login = async (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => signOut(auth);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  return (
    <authContext.Provider value={{ signup, login, user, logout }}>
      {children}
    </authContext.Provider>
  );
}
