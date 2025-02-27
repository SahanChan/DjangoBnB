"use client";
import React from "react";
import Modal from "./Modal";
import { useState } from "react";
import useLoginModal from "@/app/hooks/useLoginModal";
import CustomButton from "../forms/CustomButton";

export default function LoginModal() {
  const loginModal = useLoginModal();

  const content = (
    <div>
      <h2 className="mb-6 text-2xl">Welcome to Django bnb, Please Log in</h2>
      <form className="space-y-4">
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
        isOpen={loginModal.isOpen}
        close={loginModal.close}
        label="Log in"
        content={content}
      />
    </div>
  );
}
