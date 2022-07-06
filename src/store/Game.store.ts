import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Message {
  username: string;
  text: string;
}

export interface Game {
  room: number;
  createdAt: Date;
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
  createdAt: new Date(),
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
        ...action.payload,
        room: state.room
      };
    }
  }
});

export const { enterRoom, createRoom } = gameSlice.actions;

export default gameSlice.reducer;
