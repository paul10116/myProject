import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      allUsers: [],
      currentUser: null,
    },
  },
  reducers: {
    addUser: ({ value }, { payload }) => {
      const user = {
        username: payload.username,
        email: payload.email,
        password: payload.password,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtp7SBv7iqt9a63k7ghTSJBMPKZF03MpmhDg&usqp=CAU",
      };
      value.allUsers.push(user);
    },
    setCurrentUser: ({ value }, { payload }) => {
      value.currentUser = payload;
    },
    updatePhoto: ({ value }, { payload }) => {
      const { index, current } = payload;
      value.allUsers[index] = current;
      value.currentUser = current;
    },
    updatePassword: ({ value }, { payload }) => {
      const { index, current } = payload;
      value.allUsers[index] = current;
      value.currentUser = current;
    },
  },
});

export const { addUser, setCurrentUser, updatePhoto, updatePassword } =
  userSlice.actions;
export default userSlice.reducer;
