import { Contact } from "@/models/contact";
import axios from "axios";

const { config } = require("dotenv");
config();

export async function getContacts(): Promise<any> {
  const response = await axios.get(`${process.env.API_URL}/api/contacts`);
  return response.data;
}

export async function saveContact(newContact: any): Promise<any> {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };
  const response = await axios.post(
    `${process.env.API_URL}/api/contact`,
    newContact,
    {
      headers,
    }
  );

  return response.data;
}

export async function getContact(contactId: string): Promise<any> {
  const response = await axios.get(
    `${process.env.API_URL}/api/contact/${contactId}`
  );
  return response.data;
}

export async function updateContact(contact: Contact): Promise<any> {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };

  const response = await axios.put(
    `${process.env.API_URL}/api/contact/${contact._id}`,
    contact,
    {
      headers,
    }
  );

  return response.data;
}

export async function deleteContact(contactId: string): Promise<any> {
  const response = await axios.delete(
    `${process.env.API_URL}/api/contact/${contactId}`
  );
  return response.data;
}
