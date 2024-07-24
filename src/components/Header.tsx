"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { IoIosSend } from "react-icons/io";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const NewsLetter = () => {
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const scrollRef = useRef(null);

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setIsAtStart(scrollLeft === 0);
      setIsAtEnd(scrollLeft + clientWidth === scrollWidth);
    }
  };

  useEffect(() => {
    checkScrollPosition();
    const handleResize = () => {
      checkScrollPosition();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScroll = () => {
    checkScrollPosition();
  };

  return (
    <>
      <div className="flex flex-col justify-evenly p-4 relative">
        <div className="font-light text-s md:flex md:justify-between md:items-center relative gradient-overlay">
          {!isAtStart && (
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
              <FaAngleLeft className="" />
            </div>
          )}
          <div
            className="overflow-x-auto hide-scrollbar relative z-0"
            ref={scrollRef}
            onScroll={handleScroll}
          >
            <ul className="flex space-x-7 whitespace-nowrap">
              {[
                { href: "/woman", label: "Gifts for Her" },
                { href: "/men", label: "Gifts for Him" },
                { href: "/bags", label: "Woman's Bags" },
                { href: "/men", label: "Men's sneakers" },
                { href: "/jewelry", label: "Woman's Fashion Jewelry" },
                { href: "/kids", label: "Kids & Baby" },
                { href: "/maison", label: "Maison" },
                { href: "/jewelry", label: "For The Home" },
              ].map((item, index) => (
                <li key={index} className="relative group">
                  <Link
                    href={item.href}
                    className="underline-left hover:text-stone-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {!isAtEnd && (
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
              <FaAngleRight className="" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
