"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { WishlistItem } from "../../types";

// ログイン状態をシミュレートするためのフラグ
const isLoggedIn = true; // 実際のアプリでは適切な認証方法を使用してください

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  useEffect(() => {
    const fetchWishlist = async () => {
      const res = await fetch("/api/wishlist");
      const data = await res.json();
      setWishlist(data);
    };

    fetchWishlist();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Wishlist</h1>
      {isLoggedIn ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {wishlist.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded shadow">
              <Link href={item.link}>
                <div className="relative w-full h-64">
                  <Image
                    src={item.images[0]}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="mt-4">
                  <h2 className="text-lg font-bold">{item.title}</h2>
                  <p className="text-gray-500">{item.price}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p>Please log in to view your wishlist.</p>
      )}
    </div>
  );
};

export default WishlistPage;
