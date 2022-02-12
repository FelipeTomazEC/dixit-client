import React, { useContext, useEffect, useState } from 'react';
import { createContext } from 'react';
import { io, Socket } from 'socket.io-client';
import { createMatch } from '../services/create-match';

interface PlayerInfo {
  avatar: string;
  username: string;
}

interface MatchContext {
  matchCode: string;
  players: PlayerInfo[];
  start: (player: PlayerInfo) => Promise<void>;
}

const MatchContext = createContext<MatchContext>({} as MatchContext);

export const MatchProvider: React.FC = ({ children }) => {
  const [matchCode, setMatchCode] = useState('');
  const [socket, setSocket] = useState<Socket>();
  const [players, setPlayers] = useState<PlayerInfo[]>([]);

  const start = async ({ username, avatar }: PlayerInfo) => {
    const matchCode = await createMatch();
    setMatchCode(matchCode);
    socket.emit('subscribe', { username, avatar, matchCode });
    setPlayers((current) => [...current, { avatar, username }]);
  }

  useEffect(() => {
    const sock = io('http://localhost:5000/'); 
    setSocket(sock);

    return () => {
      sock.disconnect();
    }
  }, []);

  return (
    <MatchContext.Provider value={{ matchCode, start, players }}>
      { children }
    </MatchContext.Provider>
  );
}

export const useMatch = () => useContext(MatchContext);