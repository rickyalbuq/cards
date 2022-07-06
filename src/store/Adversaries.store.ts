import { createSlice } from '@reduxjs/toolkit';

interface Adversary {
  username: string;
  victories: number;
}

const initialState = [] as Adversary[];

const adversariesSlice = createSlice({
  name: 'adversaries',
  initialState,
  reducers: {
    add(state) {
      state;
    },
    remove(state) {
      state;
    }
  }
});

export const { add, remove } = adversariesSlice.actions;

export default adversariesSlice.reducer;
