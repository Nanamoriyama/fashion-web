"use client";

import { useDispatch } from "react-redux";
import { removeItem, editItem } from "../features/cart/cartSlice";

interface CartItemProps {
  cartItem: {
    cartID: string;
    title: string;
    price: number;
    image: string;
    amount: number;
    detail: string;
  };
}

const CartItem: React.FC<CartItemProps> = ({ cartItem }) => {
  const dispatch = useDispatch();

  const removeItemFromTheCart = () => {
    dispatch(removeItem({ cartID: cartItem.cartID }));
  };

  const handleAmount = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(
      editItem({ cartID: cartItem.cartID, amount: parseInt(e.target.value) })
    );
  };

  return (
    <>
      <article className="mb-12 flex flex-row items-start gap-y-4 border-b border-base-300 pb-6 last:border-b-0 mt-6 ml-6 mr-6">
        <img
          src={cartItem.image}
          alt={cartItem.title}
          className="h-24 w-24 rounded sm:h-32 sm:w-32 object-cover"
        />
        <div className="ml-4 sm:ml-16 flex-grow">
          <h2 className="capitalize font-light text-sm">{cartItem.title}</h2>
          <p className="text-sm font-light text-stone-400">{cartItem.detail}</p>
          <p className="font-light mt-2">
            $
            {typeof cartItem.price === "number"
              ? cartItem.price.toFixed(2)
              : "Invalid price"}
          </p>
        </div>
        <div className="ml-4 sm:ml-12">
          <div className="form-control max-w-xs">
            <label htmlFor="amount" className="label p-0">
              <span className="font-light">Qty : </span>
            </label>
            <select
              name="amount"
              id="amount"
              className="mt-2 select select-base select-bordered select-xs"
              value={cartItem.amount}
              onChange={handleAmount}
            >
              {Array.from({ length: 10 }, (_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
          <button
            className="mt-6 link link-primary link-hover text-sm hover:text-stone-400"
            onClick={removeItemFromTheCart}
          >
            remove
          </button>
        </div>
      </article>
    </>
  );
};

export default CartItem;
