interface Player {
  playerId: string;
  username: string;
  victories: number;
  roomId: number;
}

interface Room {
  roomId: number;
  createdAt: Date;
  isPrivate: boolean;
  minMatches: number;
  currentMatch: number;
}

interface Message {
  roomId: number;
  text: string;
  username: string;
}

interface RedirectPage {
  state: boolean;
  to: string;
}

interface CreateRoomData {
  payload: {
    createdAt: Date;
    playerId: string;
    message: string;
  };
}

interface GetRoomsData extends Room {
  players: number;
}

interface ConnectData {
  roomId: number;
  username: string;
}

interface DisconnectionData {
  roomId: number;
  playerId: string;
  username: string;
}

interface DeleteRoomData {
  roomId: number;
}

export type {
  Player,
  Room,
  Message,
  RedirectPage,
  CreateRoomData,
  ConnectData,
  DisconnectionData,
  GetRoomsData,
  DeleteRoomData
};
