// import fs from "fs/promises";
// import * as contactsApi from "./db/contacts.json";
import * as contactsApi from "./db/contacts.js";
import yargs from "yargs";
import { program } from "commander";

program.option;
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const getAllContacts = await contactsApi.listContacts();
      return console.log(getAllContacts);

    case "get":
      const oneContact = await contactsApi.getContactById(id);
      return console.log(oneContact);

    case "add":
      // ... name email phone
      const newContact = await contactsApi.addContact({ name, email, phone });
      return console.log(newContact);

    case "remove":
      // ... id
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}
