// import fs from "fs/promises";
import * as contactsApi from "./contacts.js";
// import {listContacts, getContactById, removeContact, addContact} from "./db/contacts"

// index.js
const argv = require("yargs").argv;

// TODO: рефакторити
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contactsApi.listContacts();
      return console.log(allContacts);

    case "get":
      // ... id
      break;

    case "add":
      // ... name email phone
      break;

    case "remove":
      // ... id
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
