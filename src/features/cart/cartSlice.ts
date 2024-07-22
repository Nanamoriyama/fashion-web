import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// CartItem 型を定義
interface CartItem {
  cartID: string;
  title: string;
  price: number;
  image: string;
  amount: number;
  detail: string; // detail プロパティを追加
}

interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<{ product: CartItem }>) => {
      state.cartItems.push(action.payload.product);
    },
    removeItem: (state, action: PayloadAction<{ cartID: string }>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.cartID !== action.payload.cartID
      );
    },
    editItem: (
      state,
      action: PayloadAction<{ cartID: string; amount: number }>
    ) => {
      const item = state.cartItems.find(
        (item) => item.cartID === action.payload.cartID
      );
      if (item) {
        item.amount = action.payload.amount;
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addItem, removeItem, editItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
