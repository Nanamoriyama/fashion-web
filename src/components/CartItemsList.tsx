"use client";

import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartItemsList: React.FC = () => {
  const cartItems = useSelector((state: any) => state.cartState.cartItems);

  const subtotal = cartItems.reduce((total: number, item: any) => {
    return total + item.price * item.amount;
  }, 0);

  return (
    <div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item: any) => (
            <CartItem key={item.cartID} cartItem={item} />
          ))}
          <div className="mt-8">
            <div className="mt-2 bg-stone-100 rounded p-4">
              <h2 className="font-light mb-4">ORDER TOTAL</h2>
              <div className="flex justify-between mb-4">
                <p className="font-light">Subtotal</p>
                <p className="font-light">${subtotal.toFixed(2)}</p>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between mb-2">
                <p className="font-light">Shipping</p>
                <p className="font-light">-</p>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between mb-2">
                <p className="font-light">Taxes</p>
                <p className="font-light">$0.00</p>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between">
                <p className="">Total</p>
                <p className="font-bold">${subtotal.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItemsList;
