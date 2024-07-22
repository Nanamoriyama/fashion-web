import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { User } from "../../types"; // src/types.ts から User 型をインポート

interface UserState {
  user: User | null;
}

const getUserFromLocalStorage = (): User | null => {
  if (typeof window !== "undefined") {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  }
  return null;
};

const initialState: UserState = {
  user: getUserFromLocalStorage(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<{ user: User; jwt: string }>) => {
      const user = { ...action.payload.user, token: action.payload.jwt };
      state.user = user;
      if (typeof window !== "undefined") {
        localStorage.setItem("user", JSON.stringify(user));
      }
    },
    logoutUser: (state) => {
      state.user = null;
      if (typeof window !== "undefined") {
        localStorage.removeItem("user");
      }
      toast.success("Logged out successfully");
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
