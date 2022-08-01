import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Player } from 'types/interfaces';

interface CreateUsername {
  username: string;
  roomId: number;
}

interface CreatePlayerByRoom {
  playerId: string;
}

const initialState = {
  playerId: '',
  username: '',
  victories: 0,
  roomId: 0
} as Player;

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    createUsername(state, action: PayloadAction<CreateUsername>) {
      return {
        ...state,
        roomId: action.payload.roomId,
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
