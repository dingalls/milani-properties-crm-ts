import { Contact } from "@/models/contact";
import axios from "axios";

export async function getContacts(): Promise<any> {
  const response = await axios.get("http://localhost:3000/api/contacts");
  return response.data;
}

export async function saveContact(newContact: any): Promise<any> {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };
  const response = await axios.post(
    "http://localhost:3000/api/contact",
    newContact,
    {
      headers,
    }
  );

  return response.data;
}

export async function getContact(contactId: string): Promise<any> {
  const response = await axios.get(
    `http://localhost:3000/api/contact/${contactId}`
  );
  return response.data;
}

export async function updateContact(contact: Contact): Promise<any> {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };

  console.log(contact._id);
  const response = await axios.put(
    `http://localhost:3000/api/contact/${contact._id}`,
    contact,
    {
      headers,
    }
  );

  return response.data;
}

export async function deleteContact(contactId: string): Promise<any> {
  const response = await axios.delete(
    `http://localhost:3000/api/contact/${contactId}`
  );
  return response.data;
}
