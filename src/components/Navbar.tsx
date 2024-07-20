"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline, IoPersonOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulating user login state
  const router = useRouter();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="z-50 flex justify-between items-center p-4">
      <div className="relative w-24 h-8">
        <Image src="/images/logo.svg" alt="DIOR Logo" fill />
      </div>
      <ul
        className={`flex space-x-4 ${
          isDrawerOpen
            ? "transform -translate-x-64 transition-transform duration-300 ease-in-out"
            : ""
        }`}
      >
        <li className="relative group">
          <Link href="/wishlist">
            <CiHeart className="text-2xl mb-6" />
          </Link>
          <div className="absolute left-0 right-0 bottom-0 h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
        </li>
        <li className="relative group">
          <Link href="/profile">
            <IoPersonOutline className="text-2xl" />
          </Link>
          <div className="absolute left-0 right-0 bottom-0 h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
        </li>
        <li className="relative group">
          <Link href="/cart">
            <IoBagOutline className="text-2xl" />
          </Link>
          <div className="absolute left-0 right-0 bottom-0 h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
        </li>
        <li>
          <button onClick={toggleDrawer}>
            <RxHamburgerMenu className="text-2xl" />
          </button>
        </li>
      </ul>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-stone-100 z-50 transform ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <button onClick={toggleDrawer} className="m-4">
          <IoMdClose className="text-2xl" />
        </button>
        <ul className="mt-8">
          <li className="relative group p-4">
            <Link href="/">HOME</Link>
            <div className="absolute left-0 right-0 bottom-0 h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </li>
          <li className="relative group p-4">
            <Link href="/men">MEN</Link>
            <div className="absolute left-0 right-0 bottom-0 h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </li>
          <li className="relative group p-4">
            <Link href="/woman">WOMAN</Link>
            <div className="absolute left-0 right-0 bottom-0 h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </li>
          <li className="relative group p-4">
            <Link href="/bags">BAGS-</Link>
            <div className="absolute left-0 right-0 bottom-0 h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </li>
          <li className="relative group p-4">
            <Link href="/jewelry">JEWELRY</Link>
            <div className="absolute left-0 right-0 bottom-0 h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </li>
          <li className="relative group p-4">
            <Link href="/ids">KIDS & BABY</Link>
            <div className="absolute left-0 right-0 bottom-0 h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </li>
          {isLoggedIn ? (
            <li className="relative group p-4 border-b border-gray-700">
              <button onClick={() => setIsLoggedIn(false)} className="">
                LOGOUT
              </button>
              <div className="absolute left-0 right-0 bottom-0 h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </li>
          ) : (
            <li className="relative group p-4">
              <button onClick={() => setIsLoggedIn(true)} className="">
                LOGIN
              </button>
              <div className="absolute left-0 right-0 bottom-0 h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
