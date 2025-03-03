"use client";
import React from "react";
import Modal from "./Modal";
import { useState } from "react";
import useLoginModal from "@/app/hooks/useLoginModal";
import CustomButton from "../forms/CustomButton";
import { useRouter } from "next/navigation";
import apiService from "@/app/services/apiService";
import { handleLogin } from "@/app/lib/actions";

export default function LoginModal() {
  const router = useRouter();
  const loginModal = useLoginModal();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  const submitLogin = async () => {
    const formData = {
      email: email,
      password: password,
    };
    const response = await apiService.post(
      "/api/auth/login/",
      JSON.stringify(formData)
    );

    if (response.access) {
      handleLogin(response.user.pk, response.access, response.refresh);
      loginModal.close();
      router.push("/");
    } else {
      setErrors(response.non_field_errors);
    }
  };
  const content = (
    <div>
      <h2 className="mb-6 text-2xl">Welcome to Django bnb, Please Log in</h2>
      <form action={submitLogin} className="space-y-4">
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="your email address"
          className="w-full h-[54px] px-4 border border-gray-100 rounded-xl"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="your password"
          className="w-full h-[54px] px-4 border border-gray-100 rounded-xl"
        />

        {errors.map((error, index) => {
          return (
            <div
              key={`error_${index}`}
              className="p-5 bg-airbnb text-white rounded-xl opacity-80"
            >
              {error}
            </div>
          );
        })}
        <CustomButton label="Submit" onClick={submitLogin} />
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
