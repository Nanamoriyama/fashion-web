import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
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

// fetchUserProfile アクションの作成
export const fetchUserProfile = createAsyncThunk(
  "user/fetchUserProfile",
  async (_, thunkAPI) => {
    try {
      const user = getUserFromLocalStorage(); // ローカルストレージからユーザーを取得
      return user; // ユーザーを返す
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to fetch user profile");
    }
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
      state.user = action.payload as User;
    });
    builder.addCase(fetchUserProfile.rejected, (state, action) => {
      toast.error(action.payload as string);
    });
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
