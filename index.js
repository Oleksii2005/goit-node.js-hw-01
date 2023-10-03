// import fs from "fs/promises";
// import * as contactsApi from "./db/contacts.json";
import * as contactsApi from "./contacts.js";
// import yargs, { option } from "yargs";
import { program } from "commander";

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const getAllContacts = await contactsApi.listContacts();
      return console.table(getAllContacts);

    case "get":
      const oneContact = await contactsApi.getContactById(id);
      return console.log(oneContact);

    case "add":
      // ... name email phone
      const newContact = await contactsApi.addContact({ name, email, phone });
      return console.log(newContact);

    case "remove":
      const contactRemove = await contactsApi.removeContact(id);
      return console.log(contactRemove);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}
invokeAction(argv);
