"use client";
import React, { useEffect, useState } from "react";

const Me = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/auth/me", {
          headers: {
            "X-User-Email": "test@test.com", // This should be dynamically set based on session
          },
        });
        const data = await res.json();
        if (res.ok) {
          setUser(data.user);
        } else {
          setError(data.error);
        }
      } catch (err) {
        setError("An error occurred while fetching the user");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>User Info</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};

export default Me;
