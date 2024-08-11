"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FormInput, SubmitBtn } from "../../components";
import customFetch from "../../utils/customFetch";
import { useSnackbar } from "notistack";

const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    if (!name || !email || !password) {
      enqueueSnackbar("All fields are required", { variant: "error" });
      return false;
    }
    if (!validateEmail(email)) {
      enqueueSnackbar("Please enter a valid email address", {
        variant: "error",
      });
      return false;
    }
    if (password.length < 6) {
      enqueueSnackbar("Password must be at least 6 characters long", {
        variant: "error",
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      console.log("Sending registration request:", {
        name,
        email,
        password,
      });

      const response = await customFetch.post("/api/auth/register", {
        name,
        email,
        password,
      });

      if (response.ok) {
        enqueueSnackbar("Account created successfully", { variant: "success" });
        router.push("/login"); // ログインページにリダイレクト
      } else {
        const errorData = await response.json();
        console.error("Registration failed:", errorData);
        enqueueSnackbar(
          `Registration failed: ${errorData.error || "Unknown error"}`,
          {
            variant: "error",
          }
        );
      }
    } catch (error) {
      console.error("An error occurred during registration:", error);
      enqueueSnackbar("An error occurred. Please try again.", {
        variant: "error",
      });
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
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
