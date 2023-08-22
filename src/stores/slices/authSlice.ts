import { IUser } from "../../interfaces/user";
import { createSlice } from "@reduxjs/toolkit";
import { setAuthToken } from "../../lib/API";

const initialAuthState: IUser = {
  id: 0,
  username: "",
  full_name: "",
  email: "",
  profile_picture: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    AUTH_LOGIN: (_, action) => {
      const payload = action.payload;
      setAuthToken(payload.token);
      console.log("redux auth login brotheerrr:", payload);
      //  console.log("ini data user mu bro:", action.payload.user);
      localStorage.setItem("token", payload.token);

      const user: IUser = {
        id: payload.user.id,
        username: payload.user.username,
        full_name: payload.user.full_name,
        email: payload.user.email,
        profile_picture: payload.user.profile_picture,
      };

      return user;
    },
    AUTH_CHECK: (_, action) => {
      const payload = action.payload;
      console.log("redux auth check brotherrrrr:", payload);
      //  console.log("ini data user mu bro:", action.payload.user);
      //localStorage.setItem("token", payload.token);

      const user: IUser = {
        id: payload.id,
        username: payload.username,
        full_name: payload.full_name,
        email: payload.email,
        profile_picture: payload.profile_picture,
      };

      return user;
    },
    AUTH_ERROR: () => {
      localStorage.removeItem("token");
    },
    AUTH_LOGOUT: () => {},
  },
});
