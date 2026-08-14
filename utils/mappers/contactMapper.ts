// utils/mappers/contactMapper.ts
import { Contact } from "@/types/contact";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function mapToContact(raw: any): Contact {
  return {
    id: raw.id,
    name: raw.name,
    phone: raw.phone,
    avatarUrl: raw.avatarUrl,
    about: raw.about,
    presence: {
      online: raw.presence?.online ?? false,
      lastSeen: raw.presence?.lastSeen ?? null,
    },
  };
}
