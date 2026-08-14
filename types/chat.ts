// types/chat.ts
import { Message } from "./message";

export type ChatType = 'individual' | 'group';

export interface Participant {
  contactId: string;
  role: 'admin' | 'member';
}

export interface Presence {
  online: boolean;
  lastSeen: string | null;
}

interface BaseChat {
  id: string;
  type: ChatType;
  name: string;
  avatarUrl: string | null;
  pinned: boolean;
  muted: boolean;
  mutedUntil: string | null;
  archived: boolean;
  unreadCount: number;
  isTyping: boolean;
  lastMessageId: string;
  messages: Message[];
}

export type Chat = BaseChat & (
  | { 
      type: 'individual'; 
      contactId: string; 
      phone: string; 
      about: string; 
      presence: Presence;
    }
  | { 
      type: 'group'; 
      description: string; 
      createdBy: string; 
      createdAt: string; 
      participants: Participant[]; 
    }
);
