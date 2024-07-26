"use client";
import React, { useState, useEffect } from "react";
import { Product } from "../types";
import ProductCard from "./ProductCard";
import { FaAngleDown, FaAngleUp, FaCheck } from "react-icons/fa";

type ProductListProps = {
  products: Product[];
  categoryName: string;
};

const ProductList = ({ products, categoryName }: ProductListProps) => {
  const [sortOption, setSortOption] = useState<string>("Recommended");
  const [sortedProducts, setSortedProducts] = useState<Product[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    setSortedProducts(products);
  }, [products]);

  const handleSortChange = (option: string) => {
    setSortOption(option);
    let sorted = [...products];
    if (option === "Price low to high") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (option === "Price high to low") {
      sorted.sort((a, b) => b.price - a.price);
    } else {
      sorted = products; // Recommended (default sort order)
    }
    setSortedProducts(sorted);
    setIsMenuOpen(false); // メニューを閉じる
  };

  const renderSortOption = (option: string) => (
    <button
      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
      onClick={() => handleSortChange(option)}
    >
      {sortOption === option && <FaCheck className="mr-2" />}
      {option}
    </button>
  );

  return (
    <>
      <div className="flex justify-center">
        <h1 className="font-light text-stone-700 mt-6 mb-6 text-2xl">
          {categoryName}
        </h1>
      </div>
      <div
        className="flex justify-end relative"
        onMouseEnter={() => setIsMenuOpen(true)}
        onMouseLeave={() => setIsMenuOpen(false)}
      >
        <button className="underline font-light mr-6 text-stone-600 flex items-center">
          Sort by
          {isMenuOpen ? (
            <FaAngleUp className="ml-2" />
          ) : (
            <FaAngleDown className="ml-2" />
          )}
        </button>
      </div>
      <hr className="border-t-2 border-gray-200 my-4" />
      <div
        className={`transition-all duration-1000 ease-in-out ${
          isMenuOpen ? "max-h-64" : "max-h-0"
        } overflow-hidden`}
        onMouseEnter={() => setIsMenuOpen(true)}
        onMouseLeave={() => setIsMenuOpen(false)}
      >
        <div className="relative w-fullshadow-lg z-50">
          {renderSortOption("Recommended")}
          {renderSortOption("Price low to high")}
          {renderSortOption("Price high to low")}
        </div>
      </div>
      <div className="bg-white mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full justify-evenly mb-6 pb-6">
        {sortedProducts.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            index={index}
            isAboveTheFold={index < 4}
          />
        ))}
      </div>
    </>
  );
};

export default ProductList;
