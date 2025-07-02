import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../firebase";

const getErrorInString = (str) => {
  return str
    .split("/")[1]
    .split("-")
    .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
    .join(" ");
};

const useAuthenticate = () => {
  const [signInUpError, setSignInUpError] = useState(null);

  const authenticateSignUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const message = getErrorInString(errorCode);
        setSignInUpError(message);
      });
  };

  const authenticateSignIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const message = getErrorInString(errorCode);
        setSignInUpError(message);
      });
  };
  return { authenticateSignUp, signInUpError, authenticateSignIn };
};

export default useAuthenticate;
