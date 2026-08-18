import { create } from "zustand";
import { Chat } from "@/types/chat";

interface ChatStore {
  chats: Chat[];
  selectedChat: Chat | null;

  setChats: (chats: Chat[]) => void;
  setSelectedChat: (chat: Chat) => void;
  setUnreadCount: (chatId: string, unreadCount: number) => void;
}

export const useChatStore = create<ChatStore>((set) => ({
  chats: [],
  selectedChat: null,

  setChats: (chats) =>
    set({
      chats,
    }),

  setSelectedChat: (chat) =>
    set({
      selectedChat: chat,
    }),

  setUnreadCount: (chatId, unreadCount) =>
    set((state) => ({
      chats: state.chats.map((chat) =>
        chat.id === chatId
          ? { ...chat, unreadCount }
          : chat
      ),

      selectedChat:
        state.selectedChat?.id === chatId
          ? {
              ...state.selectedChat,
              unreadCount,
            }
          : state.selectedChat,
    })),
}));