"use client";

import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import CartItemsList from "../../components/CartItemsList";

const Cart: React.FC = () => {
  const cartItems = useSelector((state: any) => state.cartState.cartItems);

  return (
    <div className="p-2">
      <hr />
      <h1 className="flex justify-center font-light text-2xl mt-6 text-stone-700">
        MY SHOPPING BAG
      </h1>
      <h1 className="text-xl font-light mt-14 mb-4 text-stone-700">
        YOUR ITEMS
      </h1>
      <hr />
      <CartItemsList />
      <div className="flex justify-center mt-8">
        {cartItems.length === 0 ? (
          <Link
            href="/"
            className="bg-black text-stone-300 rounded-full w-1/3 font-light text-xs p-4 text-center"
          >
            CONTINUE SHOPPING
          </Link>
        ) : (
          <button
            className="bg-black text-stone-300 rounded-full w-1/3 font-light text-xs p-4"
            onClick={() => {
              // Proceed to checkout logic here
              alert("Proceed to checkout");
            }}
          >
            PROCEED TO CHECKOUT
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
