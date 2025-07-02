import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut
} from "firebase/auth";

import { auth } from "../firebase";
import { useDispatch } from "react-redux";

// store
import { addUser, removeUser } from "../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

const getErrorInString = (str) => {
  return str
    .split("/")[1]
    .split("-")
    .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
    .join(" ");
};

const useAuthenticate = () => {
  const [signInUpError, setSignInUpError] = useState(null);

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

  const authenticateSignIn = (email, password) => {
    try {
      signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      const message = getErrorInString(error.code);
      setSignInUpError(message);
    }
  };

  const SignOut = () => {
    try {
      signOut(auth);
    } catch (error) {
      console.log(error.message);
    }
  };

  return {
    authenticateSignUp,
    signInUpError,
    authenticateSignIn,
    SignOut,
  };
};

export default useAuthenticate;

export const useAuthStateChange = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authStateChange = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // whenever the user sign in and sign up will get the user here
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
  };

  return { authStateChange };
};
