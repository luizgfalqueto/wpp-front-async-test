// utils/mappers/chatMapper.ts
import { Chat } from "@/types/chat";
import { mapToMessage } from "./messageMapper";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function mapToChat(raw: any): Chat {
  const base = {
    id: raw.id,
    type: raw.type,
    name: raw.name,
    avatarUrl: raw.avatarUrl,
    pinned: raw.pinned,
    muted: raw.muted,
    mutedUntil: raw.mutedUntil,
    archived: raw.archived,
    unreadCount: raw.unreadCount,
    isTyping: raw.isTyping,
    lastMessageId: raw.lastMessageId,
    // Mapeamento recursivo usando o mapper de mensagem
    messages: (raw.messages || []).map(mapToMessage),
  };

  if (raw.type === 'individual') {
    return {
      ...base,
      type: 'individual',
      contactId: raw.contactId,
      phone: raw.phone,
      about: raw.about,
      presence: raw.presence,
    };
  }

  if (raw.type === 'group') {
    return {
      ...base,
      type: 'group',
      description: raw.description,
      createdBy: raw.createdBy,
      createdAt: raw.createdAt,
      participants: raw.participants,
    };
  }

  throw new Error(`Unknown chat type: ${raw.type}`);
}
