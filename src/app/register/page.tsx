"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FormInput, SubmitBtn } from "../../components";
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";
import Link from "next/link";

const Register: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await customFetch.post("/api/auth/register", {
        username,
        email,
        password,
      });

      if (response.ok) {
        toast.success("Account created successfully");
        router.push("/login"); // ログインページにリダイレクト
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || "Registration failed");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <section className="h-screen grid place-items-center">
      <form
        onSubmit={handleSubmit}
        className="card w-96 p-8 bg-base-100 flex flex-col gap-y-4"
      >
        <h4 className="text-center text-2xl p-4">Register</h4>
        <FormInput
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="mt-4">
          <SubmitBtn text="Register" isSubmitting={false} />
        </div>
        <p className="text-center p-4">
          Already a member?
          <Link
            href="/login"
            className="ml-2 link link-hover link-primary capitalize font-bold"
          >
            login
          </Link>
        </p>
      </form>
    </section>
  );
};

export default Register;
