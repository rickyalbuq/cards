import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Player {
  playerId: string;
  username: string;
  victories: number;
  room: number;
}

interface CreateUsername {
  username: string;
  room: number;
}

const initialState = {
  playerId: '',
  username: '',
  victories: 0,
  room: 0
} as Player;

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    createUsername(state, action: PayloadAction<CreateUsername>) {
      return {
        ...state,
        room: action.payload.room,
        username: action.payload.username
      };
    },
    remove(state) {
      state;
    }
  }
});

export const { createUsername, remove } = playerSlice.actions;

export default playerSlice.reducer;
