
type Prompt = string
type Output = string

export type History = { internal: [[Prompt, Output]]; visible: [[Prompt, Output]] };
export interface IChat {
  history: History;
  createdAt: Date;
  updatedAt: Date;
  creator: string;
}

export type IChatDocument = IChat & { _id: string };
