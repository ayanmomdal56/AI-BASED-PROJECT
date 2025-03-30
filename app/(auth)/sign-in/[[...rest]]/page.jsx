"use client";
import { SignIn } from "@clerk/nextjs";
import React from "react";

const SignInPage = () => {
  return (
    <div className="relative flex justify-center items-center h-screen bg-black">
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-xl"></div>
      <div className="relative z-10 p-6 bg-transparent rounded-lg shadow-lg">
        <SignIn />
      </div>
    </div>
  );
};

export default SignInPage;
