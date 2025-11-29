import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Интерфейс для пользователя
interface UserInfo {
  _id: string;
  name: string;
  email: string;
  isAdmin?: boolean;
  token?: string;
  // добавьте другие поля по необходимости
}

// Интерфейс состояния
interface AuthState {
  userInfo: UserInfo | null;
}

// Начальное состояние
const initialState: AuthState = {
  userInfo: localStorage.getItem('userInfo') 
    ? JSON.parse(localStorage.getItem('userInfo')!) 
    : null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<UserInfo>) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
      
      const expirationTime = new Date().getTime() + 30 * 24 * 60 * 60 * 1000; // 30 дней
      localStorage.setItem('expirationTime', expirationTime.toString());
    },
    logout: (state) => {
      state.userInfo = null;
      localStorage.clear();
    },
  }
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;

// Типизированные селекторы
export const selectCurrentUser = (state: { auth: AuthState }) => state.auth.userInfo;
export const selectIsAuthenticated = (state: { auth: AuthState }) => state.auth.userInfo !== null;