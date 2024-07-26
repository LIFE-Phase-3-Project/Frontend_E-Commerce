import { createSlice } from "@reduxjs/toolkit";

const storedUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
const storedRole = localStorage.getItem('user-role') ? JSON.parse(localStorage.getItem('user-role')) : "";

const initialState = {
  isLoggedIn: storedUser ? true : false,
  id: storedUser ? storedUser.id : null,
  address: storedUser ? storedUser.address : null,
  email: storedUser ? storedUser.email : null,
  firstName: storedUser ? storedUser.firstName : null,
  lastname: storedUser ? storedUser.lastname : null,
  password: storedUser ? storedUser.password : null,
  phoneNumber: storedUser ? storedUser.phoneNumber : null,
  role: storedRole
};

const userAuthSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    setLogInUser: (state, action) => {
      const user = action.payload;
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('user-role', JSON.stringify(user.role)); 
      state.isLoggedIn = true;
      state.id = user.id;
      state.address = user.address;
      state.email = user.email;
      state.firstName = user.firstName;
      state.lastname = user.lastname;
      state.password = user.password;
      state.phoneNumber = user.phoneNumber;
      state.role = user.role;
    },
    setRegisterUser: (state, action) => {
      const user = action.payload;
      state.isLoggedIn = true;
      state.id = user.id;
      state.address = user.address;
      state.email = user.email;
      state.firstName = user.firstName;
      state.lastname = user.lastname;
      state.password = user.password;
      state.phoneNumber = user.phoneNumber;
      state.role = localStorage.getItem('user-role') ? JSON.parse(localStorage.getItem('user-role')) : "";
    },
    setLogout: (state) => {
      state.isLoggedIn = false;
      state.id = null;
      state.address = null;
      state.email = null;
      state.firstName = null;
      state.lastname = null;
      state.password = null;
      state.phoneNumber = null;
      state.role = "";
      localStorage.removeItem('user');
      localStorage.removeItem('user-role');
    },
    setUserRole: (state, action) => {
      state.role = action.payload;
      localStorage.setItem('user-role', JSON.stringify(action.payload));
    }
  },
});

export const { setLogInUser, setRegisterUser, setLogout, setUserRole } = userAuthSlice.actions;

export default userAuthSlice.reducer;
