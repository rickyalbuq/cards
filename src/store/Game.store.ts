import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Room } from '../types/interfaces';

interface EnterRoom {
  roomId: number;
}

const initialState = {
  roomId: 0,
  createdAt: new Date(),
  isPrivate: true,
  maxMatches: 0,
  currentMatch: 0
} as Room;

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    enterRoom(state, action: PayloadAction<EnterRoom>) {
      return {
        ...state,
        roomId: action.payload.roomId
      };
    },
    createRoom(state, action: PayloadAction<Room>) {
      return {
        ...action.payload
      };
    }
  }
});

export const { enterRoom, createRoom } = gameSlice.actions;

export default gameSlice.reducer;
