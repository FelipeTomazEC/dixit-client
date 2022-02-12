import { api } from './api';

interface CreateMatchResponse {
  data: {
    matchCode: string;
  }
}

export const createMatch = async (): Promise<string> => {
  const response = await api.post<CreateMatchResponse>('/matches', {});
  return response.data.data.matchCode;
}