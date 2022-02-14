import { PlayerInfo } from '../interfaces/player-info';
import { api } from './api';

interface JoinMatchResponse {
  data: {
    matchPlayers: PlayerInfo[];
  }
}

export interface JoinMatchRequest {
  matchCode: string;
  avatar: string;
  username: string;
}

export const joinMatch = async (request: JoinMatchRequest): Promise<PlayerInfo[]> => {
  const endpoint = `/matches/${request.matchCode}`;
  const response = await api.post<JoinMatchResponse>(endpoint, {
    avatar: request.avatar,
    username: request.username
  });

  return response.data.data.matchPlayers;
}