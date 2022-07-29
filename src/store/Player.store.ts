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

interface CreatePlayerByRoom {
  playerId: string;
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
    createPlayerByRoom(state, action: PayloadAction<CreatePlayerByRoom>) {
      return {
        ...state,
        playerId: action.payload.playerId
      };
    },
    remove(state) {
      state;
    }
  }
});

export const { createUsername, createPlayerByRoom, remove } =
  playerSlice.actions;

export default playerSlice.reducer;
