import { Chat } from "@/types/chat";
import { create } from "zustand";

interface ChatStore {
  selectedChat: Chat | null;

  setSelectedChat: (chatId: Chat) => void;
  clearSelectedChat: () => void;
}

export const useChatStore = create<ChatStore>((set) => ({
  selectedChat: null,

  setSelectedChat: (chat) =>
    set({
      selectedChat: chat,
    }),

  clearSelectedChat: () =>
    set({
      selectedChat: null,
    }),
}));