"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useWishlist } from "../../contexts/WishlistContext";

const WishlistPage = () => {
  const { wishlist } = useWishlist();

  if (wishlist.length === 0) {
    return <div className="container mx-auto p-4">Your wishlist is empty.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Wishlist</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {wishlist.map((product, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <Link href={product.link}>
              <Image
                src={product.images[0]}
                alt={product.title}
                width={200}
                height={200}
                className="object-contain"
              />
              <h2 className="mt-2 text-lg font-medium">{product.title}</h2>
              <p className="mt-1 text-gray-700">${product.price.toFixed(2)}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
