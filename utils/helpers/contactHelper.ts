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
