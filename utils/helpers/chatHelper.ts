import data from "../../database/db.json";
import { mapToChat} from "@/utils/mappers/chatMapper";
import { Chat} from "@/types/chat";
import { Contact } from "@/types/contact";
import { FilterType } from "@/types/filter";

export const getChatsByFilter = (filter: FilterType): Chat[] => {
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

    default:
      filteredChats = chats.filter(
        (chat) => chat.unreadCount > 0
      );
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
