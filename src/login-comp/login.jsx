import React from "react";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../utils/firebase.js";

const login = () => {
  const googleProider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    googleProider.addScope("address");
    const result = await signInWithPopup(auth, googleProider);
    const name = result.user.displayName;
    const mailId = result.user.email;
    const photo = result.user.photoURL;
    const phoneNumber = result.user;
    console.log(name, mailId, photo);
  };
  return (
    <div className="shadow-xl flex justify-center items-center p-[20vw]">
      <div
        className=" flex items-center gap-2 text-white p-2 bg-gray-700 rounded-lg cursor-pointer"
        onClick={GoogleLogin}
      >
        <FcGoogle />
        <h1>Sign in with Google</h1>
      </div>
    </div>
  );
};

export default login;
