// src/app/men/page.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { products } from "./data";

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

  const handleMouseEnter = (index: number, image: string) => {
    setHoveredImage((prevState) => ({
      ...prevState,
      [index]: image,
    }));
  };

  const handleMouseLeave = (index: number) => {
    setHoveredImage((prevState) => ({
      ...prevState,
      [index]: null,
    }));
  };

  return (
    <>
      <div>
        <span>Filter</span>
      </div>
      <div className="bg-white mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full justify-evenly mb-6 pb-6">
        {products.map((product: Product, index: number) => (
          <Link
            href={product.link}
            key={index}
            className="bg-white text-center p-4"
          >
            <div
              className="relative w-full h-96 xs:h-[300px] sm:h-[350px] md:h-[400px] lg:h-[480px]"
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <Image
                src={hoveredImage[index] || product.images[0]}
                alt={product.title}
                fill
                sizes="(max-width: 768px) 50vw, (min-width: 992px) 25vw"
                className="object-contain"
              />
              <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                {product.images.map((image, imgIndex) => (
                  <div
                    key={imgIndex}
                    className="w-1/3 h-1/3 m-1 cursor-pointer"
                    onMouseEnter={() => handleMouseEnter(index, image)}
                  >
                    <Image
                      src={image}
                      alt={`Thumbnail ${imgIndex}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col px-2 md:px-4 lg:px-6 text-left">
              <p className="mt-1 sm:mt-4 md:mt-6 lg:mt-6 text-sm font-light">
                {product.title}
              </p>
              <p>{product.detail}</p> {/* ここに詳細情報を追加 */}
              <h2 className="mt-1 sm:mt-2 md:mt-3 lg:mt-3">${product.price}</h2>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Page;
