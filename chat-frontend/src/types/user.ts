export enum UserTypeEnum {
  anonymous = 'anonymous',
  authed = 'authed',
}

export interface IAnonymousUser {
  deviceId: string;
  type: UserTypeEnum.anonymous;
  email: undefined | null;
  code: undefined | null;
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
}

export interface IAuthedUser {
  deviceId: string;
  type: UserTypeEnum.authed;
  email: string;
  code: string;
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
}

export type IUser = IAnonymousUser | IAuthedUser;
