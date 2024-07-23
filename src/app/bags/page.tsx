"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { products } from "./product/data";
import { useWishlist } from "../../contexts/WishlistContext";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

type Product = {
  images: string[];
  title: string;
  price: number;
  size: string[];
  link: string;
  detail: string;
};

const Page = () => {
  const [hoveredImage, setHoveredImage] = useState<{
    [key: number]: string | null;
  }>({});
  const { addToWishlist, removeFromWishlist } = useWishlist();
  const [liked, setLiked] = useState<{ [key: number]: boolean }>({});
  const [message, setMessage] = useState<string | null>(null);

  const handleMouseEnter = (index: number) => {
    if (products[index].images.length > 1) {
      setHoveredImage((prevState) => ({
        ...prevState,
        [index]: products[index].images[1],
      }));
    }
  };

  const handleMouseLeave = (index: number) => {
    setHoveredImage((prevState) => ({
      ...prevState,
      [index]: null,
    }));
  };

  const handleWishlistToggle = (
    product: Product,
    index: number,
    e: React.MouseEvent
  ) => {
    e.preventDefault();
    if (liked[index]) {
      removeFromWishlist(product);
      setMessage("Item removed from the wishlist");
    } else {
      addToWishlist(product);
      setMessage("Item added to the wishlist");
    }
    setLiked((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
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
    <>
      <div className="flex justify-center">
        <span className="font-light text-stone-700 mt-6 mb-6">Bags</span>
      </div>
      <div className="flex justify-end ">
        <span className="underline font-light mr-4 text-stone-600">Filter</span>
        <span className="underline font-light mr-6 text-stone-600">
          Sort by
        </span>
      </div>
      {message && (
        <div className="fixed top-0 left-0 w-full font-light bg-stone-800 text-white text-center p-2">
          {message}
        </div>
      )}
      <div className="bg-white mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full justify-evenly mb-6 pb-6">
        {products.map((product: Product, index: number) => (
          <div key={index} className="bg-white p-2">
            <Link href={product.link} className="block">
              <div
                className="relative w-full"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <div className="relative pb-[100%]">
                  <Image
                    src={hoveredImage[index] || product.images[0]}
                    alt={product.title}
                    fill
                    sizes="(max-width: 575px) 50vw, (min-width: 576px) 25vw"
                    className="object-contain"
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
                  <button
                    className=""
                    onClick={(e) => handleWishlistToggle(product, index, e)}
                  >
                    {liked[index] ? (
                      <FaHeart size={20} />
                    ) : (
                      <CiHeart size={20} />
                    )}
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Page;
