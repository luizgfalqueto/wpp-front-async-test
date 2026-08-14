import { Message, MessageType } from "@/types/message";

/**
 * Maps raw JSON message data to the strictly typed Message interface.
 * 
 * @param raw - The raw object from the database/API
 * @returns A strictly typed Message object
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function mapToMessage(raw: any): Message {
  const base = {
    id: raw.id,
    chatId: raw.chatId,
    senderId: raw.senderId,
    timestamp: raw.timestamp,
    status: raw.status,
    reactions: raw.reactions,
    replyTo: raw.replyTo,
    forwarded: raw.forwarded,
    starred: raw.starred,
    edited: raw.edited,
    editedAt: raw.editedAt,
    deleted: raw.deleted,
  };

  const type = raw.type as MessageType;

  switch (type) {
    case 'text':
      return { ...base, type, text: raw.text };
    case 'image':
    case 'video':
    case 'voice':
    case 'document':
    case 'sticker':
      return { ...base, type, media: raw.media };
    case 'location':
      return { ...base, type, location: raw.location };
    case 'contact':
      return { ...base, type, contactCard: raw.contactCard };
    case 'system':
      return { ...base, type, system: raw.system };
    default:
      throw new Error(`Unknown message type: ${type}`);
  }
}
