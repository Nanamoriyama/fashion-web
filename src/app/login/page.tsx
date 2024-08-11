"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebaseConfig"; // 適切なパスに修正
import { loginUser } from "../../features/user/userSlice"; // Reduxのアクション

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    if (!email || !password) {
      enqueueSnackbar("All fields are required", { variant: "error" });
      return false;
    }
    if (!validateEmail(email)) {
      enqueueSnackbar("Please enter a valid email address", {
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
      console.log("Sending login request:", { email, password });
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Reduxストアにユーザー情報を保存
      dispatch(
        loginUser({
          user: {
            id: user.uid,
            name: user.displayName || "User", // name プロパティを使用
            email: user.email!,
            token: "dummy-token", // 実際にはFirebaseからトークンを取得することが推奨される
          },
          jwt: "dummy-jwt", // 実際にはFirebaseからトークンを取得して設定する
        })
      );

      enqueueSnackbar("Logged in successfully", { variant: "success" });
      router.push("/"); // ホームページにリダイレクト
    } catch (error) {
      console.error("Login error:", error);
      enqueueSnackbar("Login failed. Please check your credentials.", {
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
        <h4 className="text-center text-2xl p-4">Login</h4>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="input"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="input"
        />
        <div className="mt-4">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
        <p className="text-center p-4">
          Not a member yet?
          <Link
            href="/register"
            className="ml-2 link link-hover link-primary capitalize font-bold"
          >
            Register
          </Link>
        </p>
      </form>
    </section>
  );
};

export default Login;
