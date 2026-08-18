import { create } from "zustand";
import { Chat } from "@/types/chat";
import { Message, MessageStatus } from "@/types/message";

interface ChatStore {
  chats: Chat[];
  selectedChatId: string | null

  setChats: (chats: Chat[]) => void;
  setSelectedChat: (chat: string | null) => void;
  setUnreadCount: (chatId: string, unreadCount: number) => void;
  addMessage: (chatId: string, message: Message) => void;

  updateMessageStatus: (
    chatId: string,
    messageId: string,
    status: MessageStatus
  ) => void;
}

export const useChatStore = create<ChatStore>((set) => ({
  chats: [],
  selectedChatId: null,

  setChats: (chats) =>
    set({
      chats,
    }),

  setSelectedChat: (chatId) =>
    set({
      selectedChatId: chatId,
    }),

  setUnreadCount: (chatId, unreadCount) =>
    set((state) => ({
      chats: state.chats.map((chat) =>
        chat.id === chatId
          ? {
              ...chat,
              unreadCount,
            }
          : chat
      ),
    })),
      
  addMessage: (chatId, message) => {
    set((state) => ({
      chats: state.chats.map((chat) => {
        if (chat.id !== chatId) {
          return chat;
        }

        return {
          ...chat,

          messages: [
            ...chat.messages,
            message,
          ],

          lastMessageId: message.id,
        };
      }),
    }));
  },

  updateMessageStatus: (
    chatId,
    messageId,
    status
  ) => {
    set((state) => ({
      chats: state.chats.map((chat) => {
        if (chat.id !== chatId) {
          return chat;
        }

        return {
          ...chat,

          messages: chat.messages.map(
            (message) => {
              if (message.id !== messageId) {
                return message;
              }

              return {
                ...message,
                status,
              };
            }
          ),
        };
      }),
    }));
  },
}));