import {
  getContacts,
  getContact,
  saveContact,
  updateContact,
  deleteContact,
} from "../../services/contacts";
import { Contact } from "../../models/contact";

const state = {
  contacts: [],
  contact: null,
};

const getters = {
  allContacts: (state: any) => state.contacts,
  getSelectedContact: (state: any) => state.contact,
};

const actions = {
  async fetchContacts(context: any): Promise<void> {
    context.commit("SET_CONTACTS", await getContacts());
  },
  async fetchContact(context: any, contactId: string): Promise<void> {
    context.commit("SET_CONTACT", await getContact(contactId));
  },
  async addContact(context: any, contact: Contact): Promise<void> {
    const newContact = {
      leadAssigned: contact.leadAssigned,
      fullName: contact.fullName,
      phoneNumber: contact.phoneNumber,
      emailAddress: contact.emailAddress,
      inquiredProperty: contact.inquiredProperty,
      timeline: contact.timeline,
      budget: contact.budget,
      leadSource: contact.leadSource,
      notes: contact.notes,
    };

    const response = await saveContact(newContact);
    context.commit("ADD_CONTACT", response);
  },
  async updateContact(context: any, contact: Contact): Promise<void> {
    await updateContact(contact);
    context.commit("UPDATE_CONTACT", contact);
  },
  async deleteContact(context: any, contactId: string): Promise<void> {
    await deleteContact(contactId);
    context.commit("DELETE_CONTACT", contactId);
  },
};

const mutations = {
  SET_CONTACTS(state: any, payload: any) {
    state.contacts = payload;
  },
  SET_CONTACT(state: any, payload: any) {
    state.contact = payload;
  },
  ADD_CONTACT(state: any, payload: any) {
    state.contacts.push(payload);
  },
  UPDATE_CONTACT(state: any, payload: any) {
    const index = state.contacts.findIndex(
      (contact: { _id: any }) => contact._id === payload._id
    );
    if (index !== -1) {
      state.contacts.splice(index, 1, payload);
    }
  },
  DELETE_CONTACT(state: any, payload: any) {
    state.contacts = state.contacts.filter(
      (contact: { _id: string }) => contact._id !== payload
    );
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
