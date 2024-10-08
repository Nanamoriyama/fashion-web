"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline, IoPersonOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { logoutUser } from "../features/user/userSlice";
import { useQueryClient } from "@tanstack/react-query";
import { MdOutlineChevronRight } from "react-icons/md";

// User インターフェースを定義
interface User {
  email: string;
  name: string;
}

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const user = useSelector((state: any) => state.userState.user);
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleLogout = () => {
    router.push("/");
    dispatch(clearCart());
    dispatch(logoutUser());
    queryClient.removeQueries();
    setIsDrawerOpen(false);
  };

  if (!isMounted) {
    return null; // マウントされるまで何も表示しない
  }

  return (
    <div className="z-9999 flex justify-between items-center p-2">
      <div className="relative w-24 h-14">
        <Link href="/" passHref>
          <Image
            src="/images/logo.png"
            alt="Logo"
            height={100}
            width={100}
            className="m-0 p-0 cursor-pointer"
          />
        </Link>
      </div>
      <div className="flex items-center space-x-2 sm:space-x-4">
        {user && (
          <>
            <span className="font-bold text-sm">{user.name}</span>
          </>
        )}
        <ul className="flex space-x-2">
          <li className="relative group">
            <Link href="/wishlist">
              <CiHeart className="text-2xl w-6 flex-shrink-0" />
            </Link>
            <div className="absolute left-0 right-0 bottom-0 h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </li>
          <li className="relative group">
            <Link href="/profile">
              <IoPersonOutline className="text-2xl w-6 flex-shrink-0" />
            </Link>
            <div className="absolute left-0 right-0 bottom-0 h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </li>
          <li className="relative group">
            <Link href="/cart">
              <IoBagOutline className="text-2xl w-6 flex-shrink-0" />
            </Link>
            <div className="absolute left-0 right-0 bottom-0 h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </li>
          <li>
            <button onClick={toggleDrawer}>
              <RxHamburgerMenu className="text-2xl w-6 flex-shrink-0" />
            </button>
          </li>
        </ul>
      </div>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-stone-50 z-50 transform ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out flex flex-col`}
        style={{ top: "0", zIndex: "100" }}
      >
        <button onClick={toggleDrawer} className="absolute top-4 left-4">
          <IoMdClose className="text-2xl" />
        </button>
        <ul className="mt-20 flex-grow flex flex-col items-center">
          <li className="relative group p-4 flex justify-between w-full">
            <Link href="/" onClick={toggleDrawer}>
              HOME
            </Link>
            <MdOutlineChevronRight />
            <div className="absolute left-0 right-0 bottom-0 h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </li>
          <li className="relative group p-4 flex justify-between w-full">
            <Link href="/men" onClick={toggleDrawer}>
              MEN
            </Link>
            <MdOutlineChevronRight />
            <div className="absolute left-0 right-0 bottom-0 h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </li>
          <li className="relative group p-4 flex justify-between w-full">
            <Link href="/woman" onClick={toggleDrawer}>
              WOMAN
            </Link>
            <MdOutlineChevronRight />
            <div className="absolute left-0 right-0 bottom-0 h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </li>
          <li className="relative group p-4 flex justify-between w-full">
            <Link href="/bags" onClick={toggleDrawer}>
              BAGS
            </Link>
            <MdOutlineChevronRight />
            <div className="absolute left-0 right-0 bottom-0 h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </li>
          <li className="relative group p-4 flex justify-between w-full">
            <Link href="/jewelry" onClick={toggleDrawer}>
              JEWELRY
            </Link>
            <MdOutlineChevronRight />
            <div className="absolute left-0 right-0 bottom-0 h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </li>
          <li className="relative group p-4 flex justify-between w-full">
            <Link href="/kids" onClick={toggleDrawer}>
              KIDS & BABY
            </Link>
            <MdOutlineChevronRight />
            <div className="absolute left-0 right-0 bottom-0 h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </li>
          <li className="relative group p-4 flex justify-between w-full">
            <Link href="/maison" onClick={toggleDrawer}>
              MAISON
            </Link>
            <MdOutlineChevronRight />
            <div className="absolute left-0 right-0 bottom-0 h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </li>

          {user ? (
            <li className="relative group p-4">
              <button
                className="btn btn-xs btn-outline hover:text-stone-400"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          ) : (
            <div className="flex flex-col items-center mb-4 w-full px-4">
              <span className="font-light mt-4">My Account</span>
              <button
                onClick={() => {
                  router.push("/login");
                  setIsDrawerOpen(false);
                }}
                className="btn btn-primary mt-4 bg-stone-900 text-white rounded-full w-full py-2"
              >
                Login
              </button>
              <Link
                href="/register"
                className="btn btn-secondary mt-2 rounded-full bg-stone-50 border border-stone-900 w-full py-2 text-center"
                onClick={toggleDrawer}
              >
                Register
              </Link>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
