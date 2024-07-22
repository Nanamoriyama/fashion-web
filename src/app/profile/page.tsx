"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Profile = () => {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();
  const token = useSelector((state: RootState) => state.userState.user?.token);

  useEffect(() => {
    const fetchUser = async () => {
      if (!token) {
        router.push("/login");
        return;
      }

      try {
        const res = await fetch("/api/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        if (res.ok) {
          setUser(data.user);
        } else {
          console.error("Failed to fetch user:", data.error);
          router.push("/login");
        }
      } catch (err) {
        console.error("An error occurred while fetching the user:", err);
        router.push("/login");
      }
    };

    fetchUser();
  }, [token, router]);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h1>Profile</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};

export default Profile;
