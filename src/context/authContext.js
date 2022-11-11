import { createContext, useContext } from "react";
import {
  createUserWithEmailAndPassword,
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
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredentials);
  };

  return (
    <authContext.Provider value={{ signup, login }}>
      {children}
    </authContext.Provider>
  );
}
