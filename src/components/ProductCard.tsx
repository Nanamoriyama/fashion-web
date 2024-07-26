"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Product } from "../types";
import { useWishlist } from "../contexts/WishlistContext";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

type ProductCardProps = {
  product: Product;
  index: number;
  isAboveTheFold: boolean; // 新しいプロパティを追加
};

const ProductCard = ({ product, index, isAboveTheFold }: ProductCardProps) => {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const { addToWishlist, removeFromWishlist } = useWishlist();
  const [liked, setLiked] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleMouseEnter = () => {
    if (product.images.length > 1) {
      setHoveredImage(product.images[1]);
    }
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    if (liked) {
      removeFromWishlist(product);
      setMessage("Item removed from the wishlist");
    } else {
      addToWishlist(product);
      setMessage("Added to the wishlist");
    }
    setLiked(!liked);
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div className="bg-white p-2">
      <Link href={product.link} className="block">
        <div
          className="relative w-full"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative pb-[100%]">
            <Image
              src={hoveredImage || product.images[0]}
              alt={product.title}
              fill
              sizes="(max-width: 575px) 50vw, (min-width: 576px) 25vw"
              className="object-contain"
              priority={isAboveTheFold} // isAboveTheFoldプロパティに基づいてpriorityを設定
            />
          </div>
        </div>
        <div className="flex flex-col mt-2 mr-4 ml-4 pr-14 w-full">
          <div className="flex justify-between items-center w-full">
            <p className="text-sm text-stone-800 font-light truncate w-full">
              {product.title}
            </p>
          </div>
          <p className="text-xs text-stone-400 truncate w-full">
            {product.detail}
          </p>
          <div className="flex justify-between items-center mt-2 m-2 w-full">
            <h2 className="text-sm">
              $
              {product.price.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </h2>
            <button onClick={handleWishlistToggle}>
              {liked ? <FaHeart size={20} /> : <CiHeart size={20} />}
            </button>
          </div>
        </div>
      </Link>
      {message && (
        <div className="fixed top-0 left-0 w-full bg-black text-white text-center p-2 z-50">
          {message}
        </div>
      )}
    </div>
  );
};

export default ProductCard;
