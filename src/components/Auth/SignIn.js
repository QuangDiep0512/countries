import React from "react";
import { auth } from "../../firebase/config";
import firebase from "../../firebase/config";
import "./SignIn.scss";
const fbProvider = new firebase.auth.FacebookAuthProvider();
const GgProvider = new firebase.auth.GoogleAuthProvider();
export const SignIn = () => {
  const handleLogin = async (authProvider) => {
    const data = await auth.signInWithPopup(authProvider);
    console.log("data", data);
  };

  return (
    <div className="btn-login">
      <button onClick={() => handleLogin(fbProvider)}>
        Sign In with Facebook
      </button>
      <button onClick={() => handleLogin(GgProvider)}>
        Sign In with Google
      </button>
    </div>
  );
};
