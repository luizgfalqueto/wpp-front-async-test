import data from "../../database/db.json";
import { mapToChat} from "@/utils/mappers/chatMapper";
import { Chat} from "@/types/chat";
import { Contact } from "@/types/contact";
import { FilterType } from "@/types/filter";

export const getChatsByFilter = (
  searchText: string,
  filter: FilterType
): Chat[] => {
  const chats = (data["chats"] as Chat[]).map(mapToChat);

  let filteredChats: Chat[];

  switch (filter) {
    case "All":
      filteredChats = chats;
      break;

    case "Group":
      filteredChats = chats.filter(
        (chat) => chat.type === "group"
      );
      break;

    case "Unread":
      filteredChats = chats.filter(
        (chat) => chat.unreadCount > 0
      );
      break;
  }

  const normalizedSearchText = searchText.trim().toLowerCase();

  if (normalizedSearchText) {
    filteredChats = filteredChats.filter((chat) => {
      const chatName = chat.name.toLowerCase();

      const lastMessage = chat.messages.find(
        (message) => message.id === chat.lastMessageId
      );

      const messageText =
        lastMessage?.type === "text"
          ? lastMessage.text.toLowerCase()
          : "";

      return (
        chatName.includes(normalizedSearchText) ||
        messageText.includes(normalizedSearchText)
      );
    });
  }

  return filteredChats.sort((a, b) => {
    if (a.pinned !== b.pinned) {
      return Number(b.pinned) - Number(a.pinned);
    }

    const aUnread = a.unreadCount > 0;
    const bUnread = b.unreadCount > 0;

    return Number(bUnread) - Number(aUnread);
  });
};

export const getContactById = (contactId : string | undefined | null): Contact | null => {
  
  if(contactId == undefined || contactId == null) return null;
  
  const contacts = data["contacts"];
  const found = contacts.find((contact) => contact.id === contactId);

  if(found == undefined) {
    return null;
  }

  return found;
};

export const getChatById = (chatId: string | undefined | null): Chat | null => {
  if(chatId == undefined || chatId == null) return null;
  
  const found = data.chats.find((chat) => chat.id === chatId);

  if (!found) {
    return null;
  }

  return mapToChat(found);
};