"use client";
import Link from "next/link";
import React, { useRef, useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Header = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= window.innerWidth <= 768 ? 100 : 150; // スクロール量を調整
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += window.innerWidth <= 768 ? 100 : 150; // スクロール量を調整
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      scrollRight();
    }, 3000); // 3秒ごとに右にスクロール

    return () => clearInterval(interval); // コンポーネントのクリーンアップ時にインターバルをクリア
  }, []);

  return (
    <div className="sticky top-0 bg-white z-50">
      <div className="flex flex-col justify-evenly p-2 relative">
        <div className="font-light text-s p-3 md:flex md:justify-between md:items-center relative gradient-overlay">
          <div className="slider-nav">
            <button
              className="slider-nav-button slider-nav-left"
              onClick={scrollLeft}
            >
              <FaAngleLeft />
            </button>
            <div className="slider-container" ref={sliderRef}>
              {[
                { href: "/woman", label: "Gifts for Her" },
                { href: "/men", label: "Gifts for Him" },
                { href: "/bags", label: "Woman's Bags" },
                { href: "/men", label: "Men's sneakers" },
                { href: "/jewelry", label: "Woman's Fashion" },
                { href: "/kids", label: "Kids & Baby" },
                { href: "/maison", label: "Maison" },
                { href: "/jewelry", label: "Jewelry" },
              ].map((item, index) => (
                <div key={index} className="slider-item">
                  <Link
                    href={item.href}
                    className="underline-left hover:text-stone-400"
                  >
                    {item.label}
                  </Link>
                  <div className="absolute left-0 right-0 bottom-0 h-[2px] bg-stone-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </div>
              ))}
            </div>
            <button
              className="slider-nav-button slider-nav-right"
              onClick={scrollRight}
            >
              <FaAngleRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
