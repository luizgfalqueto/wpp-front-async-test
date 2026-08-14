import data from "../../database/db.json";
import { mapToContact } from "../mappers/contactMapper";
import { Contact } from "@/types/contact";

export const getContacts = (): Contact[] => {
  return (data["contacts"] as Contact[]).map(mapToContact);
};
