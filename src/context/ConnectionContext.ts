import { createContext, useContext } from 'react';
import io, { Socket } from 'socket.io-client';

const socket = io('http://localhost:3001');
const Connection = createContext<Socket>(socket);

export function useSocket() {
  return useContext(Connection);
}
