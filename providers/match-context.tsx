import React, { useContext, useEffect, useState } from 'react';
import { createContext } from 'react';
import { io, Socket } from 'socket.io-client';
import { PlayerInfo } from '../interfaces/player-info';
import { createMatch } from '../services/create-match';
import { joinMatch, JoinMatchRequest } from '../services/join-match';

interface MatchContext {
  matchCode: string;
  players: PlayerInfo[];
  start: (player: PlayerInfo) => Promise<void>;
  join: (request: JoinMatchRequest) => Promise<void>;
}

const MatchContext = createContext<MatchContext>({} as MatchContext);

export const MatchProvider: React.FC = ({ children }) => {
  const [matchCode, setMatchCode] = useState('');
  const [socket, setSocket] = useState<Socket>();
  const [opponents, setOpponents] = useState<PlayerInfo[]>([]);
  const [player, setPlayer] = useState<PlayerInfo>();

  const start = async ({ username, avatar }: PlayerInfo): Promise<void> => {
    socket.emit('subscribe', { username });
    const code = await createMatch();
    await joinMatch({ avatar, username, matchCode: code });
    setMatchCode(code);
    setPlayer({ username, avatar });
  }

  const join = async (request: JoinMatchRequest) => {
    const { avatar, username } = request;
    socket.emit('subscribe', { username });
    const matchPlayers = await joinMatch(request);
    setOpponents(matchPlayers.filter(p => p.username !== username));
    setPlayer({ username, avatar });
  }

  useEffect(() => {
    const sock = io(process.env.WS_URL);
    sock.on("player-joined", (player: PlayerInfo) => {
      setOpponents((current) => [...current, player]);
    });
    
    setSocket(sock);

    return () => {
      sock.disconnect();
    }
  }, []);

  return (
    <MatchContext.Provider value={{ 
      matchCode, 
      start, 
      players: player ? [player, ...opponents] : [],
      join
    }}>
      { children }
    </MatchContext.Provider>
  );
}

export const useMatch = () => useContext(MatchContext);