import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

import { auth } from "../firebase";
import { useDispatch } from "react-redux";

// store
import { addUser, removeUser } from "../redux/slices/userSlice";

const getErrorInString = (str) => {
  return str
    .split("/")[1]
    .split("-")
    .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
    .join(" ");
};

const useAuthenticate = () => {
  const [signInUpError, setSignInUpError] = useState(null);
  const dispatch = useDispatch();

  const authenticateSignUp = async (name, email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await updateProfile(user, {
        displayName: name,
        photoURL: "https://example.com/jane-q-user/profile.jpg",
      });

      return user;
    } catch (error) {
      const message = getErrorInString(error.code);
      setSignInUpError(message);
    }
  };

  const authenticateSignIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      return user;
    } catch (error) {
      const message = getErrorInString(error.code);
      setSignInUpError(message);
    }
  };

  const authStateChange = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // whenever the user sign in and sign up will get the user here
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });
  };
  return {
    authStateChange,
    authenticateSignUp,
    signInUpError,
    authenticateSignIn,
  };
};

export default useAuthenticate;
