
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  signOut,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";
import auth from "../Utilites/firebase.config.js";
import useAxios from "../CustomHooks/useAxios.jsx";
export const AuthContext = createContext();


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const noramlAxios = useAxios();


  async function registerUser(name, email) {
    try {
      const response = await noramlAxios.put("/register", { name, email });
      if (response.data.token) {
        localStorage.setItem("authToken", response.data.token);
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  }

  const signIn = async (email, password) => {
    try {
      setLoading(true);
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const tokenResponse = await noramlAxios.post("/jwt", { email });
      if (tokenResponse.data.token) {
        localStorage.setItem("authToken", tokenResponse.data.token);
      }
      return userCredential.user;
    } catch (error) {
      throw new Error(`Failed to sign in: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const createUser = async (email, password, name, imageURL) => {
    try {
      setLoading(true);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const newUser = userCredential.user;
      await updateProfile(newUser, {
        displayName: name,
        photoURL: imageURL,
      });
      await registerUser(name, email);
      setUser({ ...newUser, displayName: name, photoURL: imageURL });
      return newUser;
    } catch (error) {
      throw new Error(`Failed to create user: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      if (user.photoURL || user.displayName) {
        await updateProfile(auth.currentUser, {
          photoURL: user.photoURL || null,
          displayName: user.displayName || null,
        });
      }
      await registerUser(user.displayName, user.email);
      return user;
    } catch (error) {
      throw new Error(`Failed to sign in with Google: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const signInWithGitHub = async () => {
    const provider = new GithubAuthProvider();
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      await registerUser(user.displayName, user.email);
      if (user.photoURL || user.displayName) {
        await updateProfile(auth.currentUser, {
          photoURL: user.photoURL || null,
          displayName: user.displayName || null,
        });
      }
      return user;
    } catch (error) {
      throw new Error(`Failed to sign in with GitHub: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const signOutUser = async () => {
    try {
      setLoading(true);
      await signOut(auth);
      setUser(null);
    } catch (error) {
      throw new Error(`Failed to sign out: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };


  const authInfo = {
    user,
    setUser,
    createUser,
    signIn,
    signInWithGoogle,
    signInWithGitHub,
    signOutUser,
    loading,
  };
  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setLoading(true)
      setUser(currentUser);
      if (currentUser?.email) {
        const user = { email: currentUser.email };
        const response = await noramlAxios.post(`/jwt`, user)
        if (response.data.token) {
          localStorage.setItem("authToken", response?.data?.token);
        }
        setLoading(false)
      } else {
        localStorage.removeItem("authToken" );
        setLoading(false)
      }
    });
    return () => unsubscribe();
  }, []);


  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;