import { createSlice } from "@reduxjs/toolkit";

export const chatSlice = createSlice({
  name: "chat",
  initialState: {
    value: {
      chat: [],
    },
  },
  reducers: {
    addMessage: ({ value }, { payload }) => {
      value.chat.push(payload);
    },
    deleteMessage: ({ value }, { payload }) => {
      value.chat.splice(payload, 1);
    },
  },
});

export const { addMessage, deleteMessage } = chatSlice.actions;
export default chatSlice.reducer;
