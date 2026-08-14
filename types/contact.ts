import { Presence } from "./chat";

export interface Contact {
  id: string;
  name: string;
  phone: string;
  avatarUrl: string | null;
  about: string;
  presence: Presence;
}
