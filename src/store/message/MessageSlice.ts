import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { RootState } from '../store';

const messageSlice = createSlice({
  name: 'message',
  initialState: {
    message: 'Initial message',
  },
  reducers: {
    setMessage(state, action: PayloadAction<string>) {
      state.message = action.payload;
    },
  },
});

export const selectMessage = (state: RootState) => state.message.message;

export const {setMessage} = messageSlice.actions;
export default messageSlice.reducer;
