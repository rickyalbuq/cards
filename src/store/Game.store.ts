import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Message {
  username: string;
  text: string;
}

export interface Game {
  room: number;
  createdAt: string;
  isPrivate: boolean;
  maxMatches: number;
  currentMatch: number;
  messages: Message[];
}

interface EnterRoom {
  room: number;
}

const initialState = {
  room: 0,
  createdAt: String(new Date().getTime()),
  isPrivate: true,
  maxMatches: 0,
  currentMatch: 0,
  messages: []
} as Game;

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    enterRoom(state, action: PayloadAction<EnterRoom>) {
      return {
        ...state,
        room: action.payload.room
      };
    },
    createRoom(state, action: PayloadAction<Game>) {
      return {
        ...action.payload
      };
    }
  }
});

export const { enterRoom, createRoom } = gameSlice.actions;

export default gameSlice.reducer;
