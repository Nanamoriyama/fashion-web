"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FormInput, SubmitBtn } from "../../components";
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { loginUser } from "../../features/user/userSlice";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      console.log("Sending login request:", { email, password });
      const response = await customFetch.post("/api/auth/login", {
        email,
        password,
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login successful:", data);
        toast.success("Logged in successfully");
        dispatch(loginUser({ user: data.user, jwt: data.token }));
        router.push("/"); // ホームページにリダイレクト
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error("Login failed:", error.message);
        toast.error(error.message || "Login failed");
      } else {
        console.error("Unexpected error:", error);
        toast.error("An unexpected error occurred.");
      }
    }
  };

  return (
    <section className="h-screen grid place-items-center">
      <form
        onSubmit={handleSubmit}
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-6"
      >
        <h4 className="text-center text-xl">LOG IN</h4>
        <p className="flex justify-center">To access your account</p>
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
          <SubmitBtn text="Login" isSubmitting={false} />
        </div>

        <p className="text-center">
          Not a member yet? <Link href="/register">Register</Link>
        </p>
      </form>
    </section>
  );
};

export default Login;
