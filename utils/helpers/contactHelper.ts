import data from "../../database/db.json";
import { mapToContact } from "../mappers/contactMapper";
import { Contact } from "@/types/contact";

export const getContacts = (): Contact[] => {
  return (data["contacts"] as Contact[]).map(mapToContact);
};

export const getChatParticipantsByIds = (participantsIds: string[]): Contact[] => {
  const contacts = data['contacts'];
  return contacts.filter((contact) => participantsIds.includes(contact.id));
} 

export const getChatParticipantById = (participantId: string | null): Contact | null => {
  if(participantId === null) return null;
  const contacts = data['contacts'];
  const found = contacts.filter((contact) => participantId === contact.id);
  return found[0];
} 
