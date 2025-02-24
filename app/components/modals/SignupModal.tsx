"use client";
import React from "react";
import Modal from "./Modal";
import { useState } from "react";
import useSignupModal from "@/app/hooks/useSignupModal";
import CustomButton from "../forms/CustomButton";

export default function SignupModal() {
  const signupModal = useSignupModal();

  const content = (
    <div>
      <h2 className="mb-6 text-2xl">Welcome to Django bnb, Please Sign up</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="your full name"
          className="w-full h-[54px] px-4 border border-gray-100 rounded-xl"
        />
        <input
          type="tel"
          placeholder="your telephone"
          className="w-full h-[54px] px-4 border border-gray-100 rounded-xl"
        />
        <input
          type="email"
          placeholder="your email address"
          className="w-full h-[54px] px-4 border border-gray-100 rounded-xl"
        />
        <input
          type="password"
          placeholder="your password"
          className="w-full h-[54px] px-4 border border-gray-100 rounded-xl"
        />
        <input
          type="password"
          placeholder="confirm your password"
          className="w-full h-[54px] px-4 border border-gray-100 rounded-xl"
        />
        <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
          The error message
        </div>
        <CustomButton label="Submit" onClick={() => console.log("fuckj")} />
      </form>
    </div>
  );

  return (
    <div>
      <Modal
        isOpen={signupModal.isOpen}
        close={signupModal.close}
        label="Sign Up"
        content={content}
      />
    </div>
  );
}
