import { History } from "@/types/chat";
import { IUser } from "@/types/user";
import { IWallet } from "@/types/wallet";
import { create } from "zustand";
import authApi from "../api/auth";

type AppStore = {
  user: IUser | null;
  token: string | null;
  history: History;
  wallet: IWallet | null;
  authorize: (
    ...data: Parameters<typeof authApi.authorize>
  ) => void;
  verify: (...data: Parameters<typeof authApi.verify>) => void;
  changeChat: (id: string) => void;
  startNewChat: () => void;
};
export const useAppStore = create<AppStore>((set) => ({
  user: null,
  token: localStorage.getItem("token"),
  wallet: null,
  history: { internal: [["", ""]], visible: [["", ""]] },
  authorize: () => {
    console.warn("Context Is Empty");
  },
  verify: () => {
    console.warn("Context Is Empty");
  },
  changeChat: () => {
    console.warn("Context Is Empty");
  },
  startNewChat: () => {
    console.warn("Context Is Empty");
  },
}));
