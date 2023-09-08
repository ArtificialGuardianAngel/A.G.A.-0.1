/**
 * GET last
 * GET previous
 * POST create
 *
 */

import { IChatDocument } from '../types/chat';
import client from './client';

const chatApi = {
  getLast: () => client.get('chat/last'),
  getPrevious: () => client.get('chat/previous'),
  create: () => client.post('chat/create'),
  getById: (id: string) => client.get<IChatDocument>(`chat/${id}`),
};

export default chatApi;
