import { signIn } from "@/auth";
import React from "react";
import GoogleIcon from "./icons/google";

const SignInButton = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
      className="text-center"
    >
      <button
        type="submit"
        className="text-black bg-white p-3 rounded-md my-3 flex items-center justify-center space-x-2 mx-auto"
      >
        <GoogleIcon />
        <div>Sign in with Google</div>
      </button>
    </form>
  );
};

export default SignInButton;
