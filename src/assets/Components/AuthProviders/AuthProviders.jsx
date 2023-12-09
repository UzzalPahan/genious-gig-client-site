import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";

import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import axios from "axios";

const auth = getAuth(app);
export const AuthContext = new createContext(null);

const AuthProviders = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [category, setCategory] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [loader, setLoader] = useState(true);

  const registerUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleUpdateProfile= (name, photo) =>{
    setLoader(true)
    return updateProfile(auth.currentUser,{
      displayName: name, photoURL: photo
    })
  }

  const logIn = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoader(true);
    return signOut(auth);
  };

  const googleAuth = (googleProvider) => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setAuthUser(currentUser);
      setLoader(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  

  useEffect(() => {
    axios
      .get("https://genious-gig-backend.vercel.app/job", {withCredentials: true})
      .then(function (response) {
        // handle success
        console.log(response);
        setJobs(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, []);
  
  useEffect(() => {
    axios
      .get("https://genious-gig-backend.vercel.app/category")
      .then(function (response) {
        // handle success
        console.log(response);
        setCategory(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, []);

  const authData = {
    authUser,
    category,
    jobs,
    loader,
    handleUpdateProfile,
    registerUser,
    logIn,
    googleAuth,
    logOut,
  };
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
