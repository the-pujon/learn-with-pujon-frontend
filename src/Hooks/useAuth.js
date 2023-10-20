import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";

const useAuth = () => {
  const [loggedUser, setLoggedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userLoading, setUserLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  //registration
  const registrationWithEmail = (email, password) => {
    setLoading(true);
    setUserLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //login with email
  const loginWithEmail = (email, password) => {
    setLoading(true);
    setUserLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //login with google
  const loginWithGoogle = () => {
    setLoading(true);
    setUserLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //login with github
  const loginWithGithub = () => {
    setLoading(true);
    setUserLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  //logout
  const logOut = () => {
    setUserLoading(true);
    return signOut(auth);
  };

  //onState
  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        fetch("http://localhost:5000/api/users/jwt", {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({ email: currentUser.email }),
        })
          .then((res) => res.json())
          .then((data) => {
            setLoggedUser(currentUser);
            setLoading(false);
            setUserLoading(false);
            localStorage.setItem("access-token", data.token);
          });
      } else {
        localStorage.removeItem("access-token");
        setUserLoading(false);
      }
    });

    return () => {
      unSub();
    };
  }, [userLoading]);

  return {
    registrationWithEmail,
    loginWithEmail,
    loginWithGoogle,
    loginWithGithub,
    logOut,
    loggedUser,
    loading,
    userLoading,
  };
};

export default useAuth;
