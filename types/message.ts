// types/message.ts

export type MessageType = 
  | 'text' | 'image' | 'video' | 'voice' 
  | 'document' | 'sticker' | 'location' | 'contact' | 'system';

export type MessageStatus = 'sending' | 'sent' | 'delivered' | 'read' | 'failed';

export interface Reaction {
  emoji: string;
  contactId: string;
}

export interface Media {
  url: string;
  mimeType: string;
  fileName: string | null;
  sizeBytes: number;
  width: number | null;
  height: number | null;
  thumbnailUrl: string | null;
  durationSec: number | null;
  caption: string | null;
}

// Definição Base para todas as mensagens
interface BaseMessage {
  id: string;
  chatId: string;
  senderId: string | null;
  timestamp: string; // ISO date
  
  // Campos de estado opcionais (não aplicáveis a sistema)
  status?: MessageStatus;
  reactions?: Reaction[];
  replyTo?: string;
  forwarded?: boolean;
  starred?: boolean;
  edited?: boolean;
  editedAt?: string; // ISO date
  deleted?: boolean;
}

// União Discriminada baseada no 'type'
export type Message = BaseMessage & (
  | { type: 'text'; text: string }
  | { type: 'image' | 'video' | 'voice' | 'document' | 'sticker'; media: Media }
  | { type: 'location'; location: { lat: number; lng: number; name: string; address: string } }
  | { type: 'contact'; contactCard: { name: string; phone: string; avatarUrl: string | null } }
  | { type: 'system'; system: { kind: 'e2e' | 'group-created' | 'member-added' | 'subject-changed'; text: string } }
);
