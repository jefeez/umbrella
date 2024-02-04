import { useContext } from 'react';
import { SocketContext } from '../contexts/socket';

export const useSocket = () => useContext(SocketContext);
