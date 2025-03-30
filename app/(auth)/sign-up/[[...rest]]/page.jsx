"use client";
import { SignUp } from "@clerk/nextjs";
import React from "react";

const SignUpPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <SignUp />
    </div>
  );
};

export default SignUpPage;
