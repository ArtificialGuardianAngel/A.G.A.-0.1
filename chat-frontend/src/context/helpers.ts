import { History } from '../types/chat';

type Messages = { _id: string; content: string; isMe: boolean }[];

export const parseHistoryToMessages = (history: History): Messages =>
  history.visible
    .map(([inp, out], i) => [
      {
        _id: i.toString(),
        content: inp,
        isMe: true,
      },
      {
        _id: i.toString(),
        content: out,
        isMe: false,
      },
    ])
    .flat();
