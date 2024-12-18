import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { createContext, useState, useEffect } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ routes }) => {
  const [user, setuser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const handleRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const handleLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };
  const handleGoogleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const manageProfile = (name, photo) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  const handleLogOut = () => {
    signOut(auth);
  };
  const authInfo = {
    handleGoogleLogin,
    handleLogOut,
    handleLogin,
    handleRegister,
    manageProfile,
    user,
    setuser,
    loading,
    setLoading,
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      if (currentUser) {
        setuser(currentUser);
      } else {
        setuser(null);
      }
      setLoading(false);
      return unsubscribe();
    });
  }, []);

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{routes}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
