"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { fetchUserProfile } from "../../features/user/userSlice";
import { useAppDispatch } from "../../hooks";

const ProfilePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useSelector((state: any) => state.userState.user);
  const router = useRouter();
  const [loading, setLoading] = useState(true); // ローディング状態を追加

  useEffect(() => {
    if (!user) {
      dispatch(fetchUserProfile()).finally(() => {
        setLoading(false); // プロフィールの取得が完了したらローディングを終了
      });
    } else {
      setLoading(false); // ユーザーが存在する場合はローディングを終了
    }
  }, [user, dispatch]);

  if (loading) {
    return <div>Loading...</div>; // ローディング中の表示
  }

  if (!user) {
    router.push("/login");
    return null;
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-lg">
          <strong>Name:</strong> {user.name}
        </p>
        <p className="text-lg">
          <strong>Email:</strong> {user.email}
        </p>
      </div>
    </div>
  );
};

export default ProfilePage;
