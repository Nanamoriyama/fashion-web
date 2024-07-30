"use client";

import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const ProfilePage: React.FC = () => {
  const user = useSelector((state: any) => state.userState.user);
  const router = useRouter();

  if (!user) {
    // ログインしていない場合、ログインページへリダイレクト
    router.push("/login");
    return null;
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-lg">
          <strong>Username:</strong> {user.username}
        </p>
        <p className="text-lg">
          <strong>Email:</strong> {user.email}
        </p>
      </div>
    </div>
  );
};

export default ProfilePage;
