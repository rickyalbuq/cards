import { createContext } from 'react';
import io, { Socket as sk } from 'socket.io-client';

const Socket = io('http://localhost:3001');
const SocketContext = createContext<sk>(Socket);

export { Socket, SocketContext };
